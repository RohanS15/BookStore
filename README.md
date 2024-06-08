# Book Search and Personal Bookshelf App

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)


## About

**Book Search and Personal Bookshelf App** is a user-friendly web application designed to help book enthusiasts explore, discover, and organize their favorite books. Users can search for books in real-time using the Open Library API and create a personalized bookshelf that is stored directly in their browser via localStorage. This means that users can retain their bookshelf selections even after closing their browser or restarting their device, providing a seamless and personalized book management experience.

### Key Features:
- **Real-Time Book Search**: Instantly search for books by title using the Open Library API.
- **Personal Bookshelf**: Save and organize your favorite books in a personalized bookshelf.
- **Persistent Storage**: Bookshelf data is saved using localStorage, ensuring it is available even after browser sessions end.
- **Responsive Design**: The application is designed to work beautifully across all devices, from desktops to mobile phones.

## Features

- **Book Search**: Search for books in real-time using the Open Library API.
- **Personal Bookshelf**: Save your favorite books to a personal bookshelf that persists using localStorage.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Prerequisites

Before you start, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (version 6 or higher recommended) or [Yarn](https://yarnpkg.com/) as a package manager

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/book-search-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd book-search-app
    ```

3. **Install dependencies**:

    If you are using `npm`:

    ```bash
    npm install
    ```

    Or if you are using `yarn`:

    ```bash
    yarn install
    ```

## Running the Application

1. **Start the development server**:

    If you are using `npm`:

    ```bash
    npm start
    ```

    Or if you are using `yarn`:

    ```bash
    yarn start
    ```

    The application will run on `http://localhost:3000` by default.

2. **Open your browser and navigate to**:

    ```
    http://localhost:3000
    ```

    You should see the application running.

## Project Structure
book-search-app
├── public # Public assets
│ ├── index.html # Main HTML file
│ └── ... # Other static assets
├── src # Source files
│ ├── assets # Static assets
│ │ └── ... # Images, styles, etc.
│ ├── components # Reusable components
│ │ ├── BookCard.js # BookCard component
│ │ ├── BookCard.css # CSS for BookCard
│ │ ├── SearchInput.js# SearchInput component
│ │ ├── SearchInput.css # CSS for SearchInput
│ │ ├── BookList.js # BookList component
│ │ ├── BookList.css # CSS for BookList
│ │ ├── Header.js # Header component
│ │ ├── Header.css # CSS for Header
│ │ ├── Button.js # Button component
│ │ ├── Button.css # CSS for Button
│ ├── pages # Page components
│ │ ├── BookSearchPage.js # BookSearchPage component
│ │ ├── BookSearchPage.css # CSS for BookSearchPage
│ │ ├── BookshelfPage.js # BookshelfPage component
│ │ ├── BookshelfPage.css # CSS for BookshelfPage
│ ├── styles # Global and app-wide styles
│ │ ├── index.css # Global styles
│ │ ├── App.css # CSS for App component
│ ├── App.js # Main app component
│ ├── App.css # CSS for App component
│ └── index.js # Entry point
└── README.md # Project readme file
## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Open Library API**: API for fetching book data.
- **localStorage**: Web Storage API for persisting data in the browser.
- **CSS**: Styling of components with media queries for responsiveness.

