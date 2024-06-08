// src/pages/BookSearchPage.js
import React, { useState, useEffect, useContext } from 'react';
import SearchInput from '../components/SearchInput';
import BookList from '../components/BookList';
import { fetchBooks } from '../services/openLibrary';
import { BookshelfContext } from '../contexts/BookshelfContext';
import '../styles/BookSearchPage.css';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const { addBook, removeBook, bookshelf } = useContext(BookshelfContext);

  useEffect(() => {
    if (query) {
      fetchBooks(query).then((data) => setBooks(data.docs));
    }
  }, [query]);

  return (
    <div className="book-search-page">
      <SearchInput query={query} onQueryChange={setQuery} />
      <BookList
        books={books}
        onAddToBookshelf={addBook}
        onRemoveFromBookshelf={removeBook}
        bookshelf={bookshelf}
      />
    </div>
  );
};

export default BookSearchPage;
