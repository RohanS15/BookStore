// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = ({ books, onAddToBookshelf, onRemoveFromBookshelf, bookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          onAddToBookshelf={onAddToBookshelf}
          onRemoveFromBookshelf={onRemoveFromBookshelf}
          isInBookshelf={bookshelf.some((b) => b.key === book.key)}
        />
      ))}
    </div>
  );
};

export default BookList;
