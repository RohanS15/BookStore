// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import Header from './components/Header';
import BookshelfProvider from './contexts/BookshelfContext';
import './app.css';

const App = () => {
  return (
    <BookshelfProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookSearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </Router>
    </BookshelfProvider>
  );
};

export default App;
