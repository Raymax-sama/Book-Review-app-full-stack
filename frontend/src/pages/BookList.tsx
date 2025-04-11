import { useState } from 'react';
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

const BookList = () => {
  const [books] = useState(dummyBooks);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Biography'];

  const filteredBooks = selectedGenre === 'All' 
    ? books 
    : books.filter(book => book.genre === selectedGenre);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-8">Explorez notre bibliothèque</h1>
      
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedGenre === genre
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-700 hover:bg-primary-50'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
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
    </div>
  );
};

export default BookList;