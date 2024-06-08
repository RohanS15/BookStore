// src/components/SearchInput.js
import React from 'react';
import '../styles/SearchInput.css';

const SearchInput = ({ query, onQueryChange }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search for books..."
      />
    </div>
  );
};

export default SearchInput;
