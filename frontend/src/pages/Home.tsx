import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

// Données fictives pour le développement
const dummyBooks = [
  {
    id: '1',
    title: 'The Cambers of Secrets',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
  },
  {
    id: '2',
    title: 'The World of Ice and Fire',
    author: 'George R.R. Martin',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Fantastic Beasts',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
  },
  {
    id: '4',
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    genre: 'Fantasy',
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
  },
];

const Home = () => {
  // Only destructure the state values since we're not using the setters yet
  const [currentBook] = useState(dummyBooks[0]);
  const [popularBooks] = useState(dummyBooks);
  const [readingSchedule] = useState([
    { day: 'Lun', date: '12' },
    { day: 'Mar', date: '13' },
    { day: 'Mer', date: '14' },
    { day: 'Jeu', date: '15' },
    { day: 'Ven', date: '16' },
    { day: 'Sam', date: '17' },
    { day: 'Dim', date: '18' },
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h1 className="text-3xl font-serif font-bold text-secondary-900 mb-4">
                Découvrez votre prochaine lecture préférée
              </h1>
              <p className="text-secondary-600 mb-6">
                Explorez notre collection de critiques de livres et trouvez votre prochaine aventure littéraire. Partagez vos opinions et connectez-vous avec d'autres passionnés de lecture.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/books"
                  className="btn btn-primary"
                >
                  Explorer les livres
                </Link>
                <Link
                  to="/register"
                  className="btn btn-secondary"
                >
                  Rejoindre
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Bibliothèque"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:bg-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold">Livre en vedette</h2>
          <Link to="/books" className="text-primary-600 hover:text-primary-700 font-medium">
            Voir tous
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <img
                src={currentBook.imageUrl}
                alt={currentBook.title}
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{currentBook.title}</h3>
                  <p className="text-secondary-600 mb-4">par {currentBook.author}</p>
                </div>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span className="ml-1 font-medium">{currentBook.rating}</span>
                </div>
              </div>
              <p className="text-secondary-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <div className="flex space-x-4">
                <Link
                  to={`/books/${currentBook.id}`}
                  className="btn btn-primary"
                >
                  Lire les critiques
                </Link>
                <Link
                  to={`/books/${currentBook.id}/review`}
                  className="btn btn-secondary"
                >
                  Ajouter une critique
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold">Livres populaires</h2>
          <Link to="/books" className="text-primary-600 hover:text-primary-700 font-medium">
            Voir tous
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              imageUrl={book.imageUrl}
              rating={book.rating}
            />
          ))}
        </div>
      </section>

      {/* Reading Schedule */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold">Calendrier de lecture</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Personnaliser
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-7 gap-4">
            {readingSchedule.map((day, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg ${
                  index === 2 ? 'bg-primary-100 border-2 border-primary-500' : 'bg-gray-50'
                }`}
              >
                <p className="text-secondary-500 text-sm font-medium mb-1">{day.day}</p>
                <p className="text-2xl font-bold mb-1">{day.date}</p>
                {index === 2 && (
                  <div className="mt-2">
                    <p className="text-xs text-primary-700 font-medium">Chapitre 5-7</p>
                    <p className="text-sm font-medium text-secondary-800 mt-1">The Chambers of Secrets</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Passez à Premium pour des critiques illimitées
              </h2>
              <p className="text-primary-100 mb-6">
                Avec notre abonnement Premium, vous pouvez publier un nombre illimité de critiques, accéder à des fonctionnalités exclusives et soutenir notre communauté.
              </p>
              <Link
                to="/upgrade"
                className="inline-block px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Passer à Premium
              </Link>
            </div>
            <div className="md:w-1/3 p-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <h3 className="text-white text-xl font-bold mb-2">Premium</h3>
                <p className="text-3xl font-bold text-white mb-2">9,99 €<span className="text-sm font-normal">/mois</span></p>
                <ul className="text-primary-100 text-sm space-y-2 mb-4">
                  <li>✓ Critiques illimitées</li>
                  <li>✓ Recommandations personnalisées</li>
                  <li>✓ Pas de publicités</li>
                  <li>✓ Support prioritaire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;