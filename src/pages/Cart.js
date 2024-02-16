// Cart.js

import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, proceedToPayment }) => {
  const totalCartValue = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-info">
              <img src={item.url} alt={item.title} className="cart-item-photo" />
              <div className="cart-item-details">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">₹{item.price}</span>
              </div>
              <button onClick={() => removeFromCart(item)} className="remove-button">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-card">
        <div className="total-card-header">Total Cart Value</div>
        <div className="total-card-value">₹{totalCartValue}</div>
        <button onClick={proceedToPayment} className="proceed-button">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
