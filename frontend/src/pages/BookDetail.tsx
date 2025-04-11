import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Données fictives pour le développement
const dummyBook = {
  id: '1',
  title: 'The Cambers of Secrets',
  author: 'J.K. Rowling',
  genre: 'Fantasy',
  imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  rating: 4.7,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
  reviews: [
    {
      id: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Excellent livre, je le recommande vivement !',
      date: '2023-05-15',
    },
    {
      id: '2',
      user: 'Jane Smith',
      rating: 4,
      comment: 'Très bon livre, mais la fin est un peu décevante.',
      date: '2023-04-22',
    },
  ],
};

const BookDetail = () => {
  // In a real app, we would use this id to fetch the book data from the API
  const { id } = useParams<{ id: string }>();
  console.log(`Viewing book with id: ${id}`);
  
  const [book] = useState(dummyBook);

  if (!book) {
    return <div className="text-center py-12">Chargement...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>
          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-serif font-bold mb-2">{book.title}</h1>
                <p className="text-secondary-600 mb-4">par {book.author}</p>
                <span className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full mb-6">
                  {book.genre}
                </span>
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
                <span className="ml-1 font-medium">{book.rating}</span>
              </div>
            </div>
            <p className="text-secondary-700 mb-6">{book.description}</p>
            <div className="flex space-x-4">
              <Link
                to={`/books/${book.id}/review`}
                className="btn btn-primary"
              >
                Ajouter une critique
              </Link>
              <button className="btn btn-secondary">
                Ajouter à ma liste
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold">Critiques</h2>
          <Link
            to={`/books/${book.id}/review`}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Ajouter une critique
          </Link>
        </div>
        
        {book.reviews.length > 0 ? (
          <div className="space-y-6">
            {book.reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                      {review.user.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-secondary-900">{review.user}</p>
                      <p className="text-sm text-secondary-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-secondary-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-card p-6 text-center">
            <p className="text-secondary-500">Aucune critique pour le moment. Soyez le premier à donner votre avis !</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;