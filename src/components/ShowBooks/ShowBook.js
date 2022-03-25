import React from 'react';
import './ShowBook.css';

const ShowBook = (props) => {
  console.log(props);
  const { id, name, price, img } = props.book;
  console.log(id, name, price, img);

  return (
    <div className="card-container">
      <div className='img-container'>
        <img className="img-fluid" src={img} alt={name} />
      </div>

      <div className='card-info'>
        <h3> {name} </h3>
        <h4>Price: ${ price}</h4>
      </div>

      <button className='add-cart-btn'>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default ShowBook;
