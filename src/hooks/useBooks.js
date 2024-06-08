// src/hooks/useBooks.js
import { useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibrary';

const useBooks = (query) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      fetchBooks(query).then((data) => setBooks(data.docs));
    }
  }, [query]);

  return books;
};

export default useBooks;
