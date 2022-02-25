import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({ books }) => {
  const currentlyReading = books.filter(
    (fetchedBook) => fetchedBook.shelf === 'currentlyReading'
  );
  const wantToRead = books.filter(
    (fetchedBook) => fetchedBook.shelf === 'wantToRead'
  );
  const read = books.filter((fetchedBook) => fetchedBook.shelf === 'read');
  console.log('Book shelves: ', currentlyReading, wantToRead, read);
  return (
    <div className='list-books-content'>
      <div>
        <BookShelf fetchBook={currentlyReading} books={books} shelfTitle= 'Currently Reading' />
        <BookShelf fetchBook={wantToRead} shelfTitle= 'Want To Read' />
        <BookShelf fetchBook={read} shelfTitle= 'Read' />
      </div>
    </div>
  );
};

export default BookShelves;
