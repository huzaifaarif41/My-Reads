import React from 'react';
import BookItems from './BookItems';

const BookShelf = ({ fetchBook, books, shelfTitle }) => {
  // console.log(props)

//   console.log('books: ', books);
//   console.log('fetchbook: ', fetchBook);
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {fetchBook &&
            fetchBook.map((fetchBook) => (
              <BookItems key={fetchBook.id} book={fetchBook} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
