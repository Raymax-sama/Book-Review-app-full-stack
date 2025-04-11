import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddReview = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  console.log(`Adding review for book with id: ${id}`);
  
  const [formData, setFormData] = useState({
    rating: 5,
    comment: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
      // Simulation d'un envoi de critique réussi
      setTimeout(() => {
        console.log('Review submitted:', formData);
        setIsLoading(false);
        navigate(`/books/${id}`);
      }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-8">Ajouter une critique</h1>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="rating" className="block text-sm font-medium text-secondary-700 mb-2">
              Note
            </label>
            <div className="flex items-center">
              <input
                type="range"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-4 bg-yellow-100 px-3 py-1 rounded-full flex items-center">
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
                <span className="ml-1 font-medium">{formData.rating}</span>
              </span>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium text-secondary-700 mb-2">
              Votre critique
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows={6}
              className="input"
              placeholder="Partagez votre opinion sur ce livre..."
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate(`/books/${id}`)}
              className="btn btn-secondary"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary flex items-center justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Publier la critique'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;