// src/contexts/BookshelfContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getBookshelfFromStorage, saveBookshelfToStorage } from '../utils/localStorage';

export const BookshelfContext = createContext();

const BookshelfProvider = ({ children }) => {
  const [bookshelf, setBookshelf] = useState(getBookshelfFromStorage());

  useEffect(() => {
    saveBookshelfToStorage(bookshelf);
  }, [bookshelf]);

  const addBook = (book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
  };

  const removeBook = (book) => {
    setBookshelf((prevBookshelf) => prevBookshelf.filter((b) => b.key !== book.key));
  };

  return (
    <BookshelfContext.Provider value={{ bookshelf, addBook, removeBook }}>
      {children}
    </BookshelfContext.Provider>
  );
};

export default BookshelfProvider;
