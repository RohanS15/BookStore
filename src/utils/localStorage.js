// src/utils/localStorage.js
import { BOOKSHELF_STORAGE_KEY } from '../config';

export const getBookshelfFromStorage = () => {
  const bookshelf = localStorage.getItem(BOOKSHELF_STORAGE_KEY);
  return bookshelf ? JSON.parse(bookshelf) : [];
};

export const saveBookshelfToStorage = (bookshelf) => {
  localStorage.setItem(BOOKSHELF_STORAGE_KEY, JSON.stringify(bookshelf));
};
