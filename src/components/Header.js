// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Book Search App</h1>
      <nav>
        <Link to="/">Search Books</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
    </header>
  );
};

export default Header;
