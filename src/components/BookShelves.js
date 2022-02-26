import React, { useState } from 'react';
import BookShelf from './BookShelf';
import { update } from '../BooksAPI';

const BookShelves = ({ books }) => {
  // const [currShelf, setCurrShelf]= useState(books.shelf)
  const [currShelf, setCurrShelf] = useState(books.shelf);

  const selectedValue = (updatedBook, shelf) => {
    update(updatedBook, shelf);
    const updated = books.find((book) => book.id === updatedBook.id);
    // console.log('upadted: ', updated);
    // console.log('shelf: ', shelf);
    updated.shelf = shelf;
    const response = [...books];
    setCurrShelf(response);
  };

  const currentlyReading = books.filter(
    (fetchedBook) => fetchedBook.shelf === 'currentlyReading'
  );

  const wantToRead = books.filter(
    (fetchedBook) => fetchedBook.shelf === 'wantToRead'
  );

  const read = books.filter((fetchedBook) => fetchedBook.shelf === 'read');
  // console.log('Book shelves: ', currentlyReading, wantToRead, read);

  return (
    <div className='list-books-content'>
      <div>
        <BookShelf
          fetchBook={currentlyReading}
          shelfTitle='Currently Reading'
          selectedValue={selectedValue}
          currShelf={currShelf}
        />
        <BookShelf
          fetchBook={wantToRead}
          shelfTitle='Want To Read'
          selectedValue={selectedValue}
          currShelf={currShelf}
        />
        <BookShelf
          fetchBook={read}
          shelfTitle='Read'
          selectedValue={selectedValue}
          currShelf={currShelf}
        />
      </div>
    </div>
  );
};

export default BookShelves;
