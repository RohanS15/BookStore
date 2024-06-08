// src/pages/BookshelfPage.js
import React, { useContext } from 'react';
import BookList from '../components/BookList';
import { BookshelfContext } from '../contexts/BookshelfContext';
import '../styles/BookshelfPage.css';

const BookshelfPage = () => {
  const { bookshelf, removeBook } = useContext(BookshelfContext);

  return (
    <div className="bookshelf-page">
      <h2>My Bookshelf</h2>
      <BookList books={bookshelf} onRemoveFromBookshelf={removeBook} bookshelf={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
