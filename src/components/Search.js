import React from 'react';
import BookItems from './BookItems';
import { search, update } from '../BooksAPI';
import { useState, useEffect } from 'react';

function Search({ fetchBooks, setFetchBooks }) {
  const [searchBooks, setSearchBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      const bookSearch = async () => {
        const response = await search(searchTerm);

        // if (response.err) {
        //   console.log('Error');
        // }

        setSearchBooks(response);
        console.log(response);
      };
      bookSearch();
    },
    [searchTerm]
  );
  const selectedValue = (searchBook, shelf) => {
    update(searchBook, shelf);

    searchBook.shelf = shelf;

    const newData = fetchBooks.filter((val) => val.id !== searchBook.id);
    setFetchBooks([...newData, searchBook]);
  };
  if (searchBooks && searchBooks.error) {
    return <h1> No Books Found </h1>;
  }

  return (
    <div>
      <div className='search-books-input-wrapper'>
        <input
          type='text'
          placeholder='Search by title or author'
          value={searchTerm ? searchTerm : ''}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='search-books-results'>
          <ol className='books-grid'>
            {searchBooks &&
              searchBooks.map((book) => (
                <BookItems
                  key={book.id}
                  book={book}
                  selectedValue={selectedValue}
                />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Search;
