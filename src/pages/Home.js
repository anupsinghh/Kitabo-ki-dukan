import React, { useState } from 'react';
import data from './Data.json';
import Footer from './Footer';
import '../App.css';
import bg from '../components/background.jpg';
import AboutUs from './About_us';
import Services from './Services';

const Home = ({ addToCart }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    const isBookInCart = cart.find((cartBook) => cartBook.title === book.title);

    if (!isBookInCart) {
      setCart([...cart, book]);
      alert(`Added ${book.title} to the cart`);
    } else {
      alert(`${book.title} is already in the cart`);
    }
  };

  return (
    <div className="home-container">
      <div className="name">
        <div className="background-image">
          <img src={bg} alt="Background" />
        </div>
        <div className="welcome-text">
          <h1>Welcome to KitabShare</h1>
        </div>
      </div>

      <div className="book-list">
        {data.map((record, index) => (
          <div className="book-card" key={index}>
            <img className="book-image" src={record.url} alt={record.title} />
            <h1 className="book-title">{record.title}</h1>
            <p className="book-description">{record.description}</p>
            <h2 className="book-price">₹{record.price}</h2>
            <button onClick={() => addToCart(record)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Add the AboutUs component below the book list */}
      <AboutUs />
      <Services/>
      <Footer />
    </div>
  );
};

export default Home;
