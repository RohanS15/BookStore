// src/services/openLibrary.js
import { OPEN_LIBRARY_API_URL, API_QUERY_PARAMS } from '../config';

export const fetchBooks = async (query) => {
  const response = await fetch(
    `${OPEN_LIBRARY_API_URL}?q=${encodeURIComponent(query)}&limit=${API_QUERY_PARAMS.limit}&page=${API_QUERY_PARAMS.page}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch books');
  }
};
