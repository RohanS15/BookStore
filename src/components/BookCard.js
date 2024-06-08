// src/components/BookCard.js
import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book, onAddToBookshelf, onRemoveFromBookshelf, isInBookshelf }) => {
  return (
    <div className="book-card">
      <img
        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="book-cover"
      />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        <button
          onClick={() => (isInBookshelf ? onRemoveFromBookshelf(book) : onAddToBookshelf(book))}
          className="book-action-button"
        >
          {isInBookshelf ? 'Remove from Bookshelf' : 'Add to Bookshelf'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
