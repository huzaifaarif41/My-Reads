import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import './App.css';
import BookItems from './components/BookItems';
import BookShelves from './components/BookShelves';

function BooksApp() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [fetchBooks, setFetchBooks] = useState([]);

  useEffect(() => {
    const booksGet = async () => {
      const res = await BooksAPI.getAll();

      if (res.err) {
        console.log('Errorrr');
      }
      // const [currentlyReading, read, wantToRead] = sortedArray(res);
      // console.log(currentlyReading)
      // setCurrentlyReading(currentlyReading)
      // setRead(read)
      // setWantToRead(wantToRead)
      setFetchBooks(res);
      console.log(res);
    };
    booksGet();
  }, []);

  return (
    <div className='app'>
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <button
              className='close-search'
              onClick={() => setShowSearchPage(false)}
            >
              Close
            </button>
            <div className='search-books-input-wrapper'>
              <input type='text' placeholder='Search by title or author' />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid' />
          </div>
        </div>
      ) : (
        <div className='list-books'>
          <Header />

          <BookShelves books={fetchBooks} />
          <div className='open-search'>
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksApp;
