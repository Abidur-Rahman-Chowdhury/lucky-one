import React, { useEffect, useState } from 'react';
import ShowBook from '../ShowBooks/ShowBook';
import ShowCart from '../ShowCart/ShowCart';
import './BookContainer.css';

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const addToCart = (book) => {
    
    const newCart = [...carts, book]; 
    setCart(newCart);
  }
  const chooseAgain = () => {
    const newCart = [];
    setCart(newCart)
  }
  return (
    <div className="container">
      <div className="book-container">
              <div className='show-book'>
                  {
                     books.map(book => <ShowBook book={book} key = {book.id} addToCart= {addToCart}></ShowBook>)
                  }
        </div>
        <div className='show-selected'>
          <h2>Selected books</h2>
          {
            carts.map(cart => <ShowCart cart ={cart} key ={cart.id} ></ShowCart> )
          }
          <button className='choose-again' onClick={() => chooseAgain()}>Choose Again</button>
        </div>
        
        <div>
          
        </div>
      </div>

    </div>
  );
};

export default BookContainer;
