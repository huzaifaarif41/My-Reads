import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Header from './components/Header';
import './App.css';
import BookShelves from './components/BookShelves';
import Search from './components/Search';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function BooksApp() {
  const [fetchBooks, setFetchBooks] = useState([]);
  // const [searchBooks, setSearchBooks] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const booksGet = async () => {
      const res = await BooksAPI.getAll();

      if (res.err) {
        console.log('Errorrr');
      }

      setFetchBooks(res);
      // console.log(res);
    };
    booksGet();
  }, []);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/search'
            element={
              <div className='search-books'>
                <div className='search-books-bar'>
                  <Link to='/'>
                    <button className='close-search' />
                  </Link>

                  <div className='search-books-input-wrapper'>
                    <Search
                      fetchBooks={fetchBooks}
                      setFetchBooks={setFetchBooks}
                    />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path='/'
            element={
              <div className='list-books'>
                <Header />
                <BookShelves books={fetchBooks}  />

                <div className='open-search'>
                  <Link to='/search'>
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default BooksApp;
