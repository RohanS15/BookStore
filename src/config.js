// src/config.js

// Base URL for the Open Library API
export const OPEN_LIBRARY_API_URL = 'https://openlibrary.org/search.json';

// Number of results to fetch per query
export const SEARCH_RESULTS_LIMIT = 10;

// API query parameters
export const API_QUERY_PARAMS = {
  limit: SEARCH_RESULTS_LIMIT,
  page: 1
};

// Local storage key for the bookshelf
export const BOOKSHELF_STORAGE_KEY = 'my_bookshelf';
