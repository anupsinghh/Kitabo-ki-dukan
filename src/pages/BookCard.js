// BookCard.js

import React from 'react';

const BookCard = ({ book }) => {
  const { name, price, detail, image } = book;

  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="book-details">
        <h2>{name}</h2>
        <p>{detail}</p>
        <p>Price: ₹{price}</p>
      </div>
    </div>
  );
};

export default BookCard;
