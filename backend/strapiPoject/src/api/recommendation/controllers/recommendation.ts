/**
 * Recommendation controller
 */

// Define interfaces for our data types
interface Review {
  id: string;
  rating: number;
  book?: Book;
}

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  reviews?: Review[];
}

interface UserWithReviews {
  id: string;
  reviews?: Review[];
  subscription?: 'free' | 'premium';
}

export default {
  // Obtenir des recommandations basées sur un livre
  async getRecommendations(ctx) {
    const { bookId } = ctx.params;
    
    if (!bookId) {
      return ctx.badRequest('ID du livre requis');
    }
    
    // Récupérer le livre et ses critiques with proper typing
    const book = await strapi.entityService.findOne('api::book.book', bookId, {
      populate: { reviews: true }
    }) as Book;
    
    if (!book) {
      return ctx.notFound('Livre non trouvé');
    }
    
    // Récupérer tous les livres pour recommandation
    const allBooks = await strapi.entityService.findMany('api::book.book', {
      filters: {
        id: {
          $ne: bookId,
        },
      },
      populate: { reviews: true }
    }) as Book[];
    
    // Algorithme simple de recommandation basé sur le genre et la note moyenne
    const bookGenre = book.genre;
    const bookReviews = book.reviews || [];
    const bookAvgRating = bookReviews.length > 0
      ? bookReviews.reduce((sum, review) => sum + review.rating, 0) / bookReviews.length
      : 0;
    
    // Calculer les scores de similarité
    const recommendations = allBooks.map(otherBook => {
      const otherReviews = otherBook.reviews || [];
      const otherAvgRating = otherReviews.length > 0
        ? otherReviews.reduce((sum, review) => sum + review.rating, 0) / otherReviews.length
        : 0;
      
      // Score de similarité basé sur la correspondance de genre et la différence de note
      const genreMatch = otherBook.genre === bookGenre ? 1 : 0;
      const ratingDiff = Math.abs(bookAvgRating - otherAvgRating);
      
      const similarityScore = genreMatch * 2 - ratingDiff;
      
      return {
        id: otherBook.id,
        title: otherBook.title,
        author: otherBook.author,
        genre: otherBook.genre,
        similarityScore,
      };
    });
    
    // Trier par score de similarité et prendre les 3 premiers
    const topRecommendations = recommendations
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, 3);
    
    return topRecommendations;
  },
  
  // Obtenir des recommandations pour un utilisateur
  async getUserRecommendations(ctx) {
    const user = ctx.state.user;
    
    if (!user) {
      return ctx.unauthorized('Utilisateur non authentifié');
    }
    
    // Récupérer les critiques de l'utilisateur with proper typing
    const userWithReviews = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      user.id,
      { 
        populate: {
          reviews: {
            populate: ['book']
          }
        }
      }
    ) as UserWithReviews;
    
    if (!userWithReviews.reviews || userWithReviews.reviews.length === 0) {
      // Si l'utilisateur n'a pas de critiques, renvoyer les livres les mieux notés
      const topRatedBooks = await strapi.db.query('api::book.book').findMany({
        populate: { reviews: true },
        orderBy: { createdAt: 'desc' },
        limit: 3,
      }) as Book[];
      
      return topRatedBooks.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        genre: book.genre,
        reason: 'Nouveautés populaires',
      }));
    }
    
    // Analyser les préférences de l'utilisateur
    const genreCounts = {};
    let totalRating = 0;
    
    userWithReviews.reviews.forEach(review => {
      const genre = review.book.genre;
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      totalRating += review.rating;
    });
    
    // Trouver le genre préféré
    const favoriteGenre = Object.keys(genreCounts).reduce(
      (a, b) => (genreCounts[a] > genreCounts[b] ? a : b),
      Object.keys(genreCounts)[0]
    );
    
    // Note moyenne donnée par l'utilisateur
    const avgUserRating = totalRating / userWithReviews.reviews.length;
    
    // Trouver des livres similaires
    const recommendedBooks = await strapi.db.query('api::book.book').findMany({
      where: {
        genre: favoriteGenre,
        id: {
          $notIn: userWithReviews.reviews.map(review => review.book.id),
        },
      },
      populate: ['reviews'],
      limit: 3,
    });
    
    return recommendedBooks.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      reason: `Basé sur votre intérêt pour le genre ${favoriteGenre}`,
    }));
  },
};