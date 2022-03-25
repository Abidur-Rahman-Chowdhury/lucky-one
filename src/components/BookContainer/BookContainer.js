import React, { useEffect, useState } from 'react';
import ShowBook from '../ShowBooks/ShowBook';
import './BookContainer.css';

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container">
      <div className="book-container">
              <div className='show-book'>
                  {
                     books.map(book => <ShowBook book={book} key = {book.id}></ShowBook>)
                  }
              </div>
        <div>
          <h1>This is right side of book choose and clear</h1>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
