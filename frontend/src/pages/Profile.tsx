import { useState } from 'react';
import { Link } from 'react-router-dom';

// Données fictives pour le développement
const dummyUser = {
  id: '1',
  username: 'JohnDoe',
  email: 'john@example.com',
  subscription: 'free',
  joinedDate: '15 Mai 2023',
  reviews: [
    {
      id: '1',
      bookId: '1',
      bookTitle: 'The Cambers of Secrets',
      bookAuthor: 'J.K. Rowling',
      bookCover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 5,
      comment: 'Excellent livre, je le recommande vivement !',
      date: '2023-05-15',
    },
    {
      id: '2',
      bookId: '2',
      bookTitle: 'The World of Ice and Fire',
      bookAuthor: 'George R.R. Martin',
      bookCover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      rating: 4,
      comment: 'Très bon livre, mais la fin est un peu décevante.',
      date: '2023-04-22',
    },
  ],
};

const Profile = () => {
  const [user] = useState(dummyUser);
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 bg-primary-50 p-8 flex flex-col items-center">
            <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-4xl font-bold mb-4">
              {user.username.charAt(0)}
            </div>
            <h1 className="text-2xl font-serif font-bold mb-2">{user.username}</h1>
            <p className="text-secondary-600 mb-4">{user.email}</p>
            <div className="bg-white rounded-full px-4 py-1 text-sm font-medium mb-6">
              {user.subscription === 'premium' ? (
                <span className="text-accent-600">Premium</span>
              ) : (
                <span className="text-secondary-600">Gratuit</span>
              )}
            </div>
            <p className="text-sm text-secondary-500">Membre depuis {user.joinedDate}</p>
            
            {user.subscription !== 'premium' && (
              <Link
                to="/upgrade"
                className="mt-6 btn btn-primary w-full text-center"
              >
                Passer à Premium
              </Link>
            )}
          </div>
          <div className="md:w-2/3 p-8">
            <div className="border-b border-secondary-200 mb-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 px-1 font-medium ${
                    activeTab === 'reviews'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-500 hover:text-secondary-700'
                  }`}
                >
                  Mes critiques
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`pb-4 px-1 font-medium ${
                    activeTab === 'settings'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-secondary-500 hover:text-secondary-700'
                  }`}
                >
                  Paramètres
                </button>
              </nav>
            </div>
            
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">Mes critiques</h2>
                {user.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {user.reviews.map((review) => (
                      <div key={review.id} className="bg-white border border-secondary-200 rounded-xl p-6">
                        <div className="flex">
                          <div className="w-16 h-24 flex-shrink-0 overflow-hidden rounded-lg mr-4">
                            <img
                              src={review.bookCover}
                              alt={review.bookTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-serif font-bold">{review.bookTitle}</h3>
                                <p className="text-sm text-secondary-600">{review.bookAuthor}</p>
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
                            <p className="text-secondary-700 text-sm mb-2">{review.comment}</p>
                            <p className="text-xs text-secondary-500">{review.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-secondary-50 rounded-xl p-6 text-center">
                    <p className="text-secondary-500">Vous n'avez pas encore publié de critiques.</p>
                    <Link to="/books" className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium">
                      Parcourir les livres
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-serif font-bold mb-4">Paramètres du compte</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-secondary-700 mb-1">
                      Nom d'utilisateur
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      defaultValue={user.username}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={user.email}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-1">
                      Nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="input"
                      placeholder="Laissez vide pour ne pas changer"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700 mb-1">
                      Confirmer le nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="input"
                      placeholder="Laissez vide pour ne pas changer"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" className="btn btn-primary">
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
                
                <div className="mt-12 pt-8 border-t border-secondary-200">
                  <h3 className="text-lg font-medium text-secondary-900 mb-4">Supprimer mon compte</h3>
                  <p className="text-secondary-600 mb-4">
                    Une fois que vous supprimez votre compte, toutes vos données seront définitivement effacées. Cette action ne peut pas être annulée.
                  </p>
                  <button className="btn btn-danger">
                    Supprimer mon compte
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;