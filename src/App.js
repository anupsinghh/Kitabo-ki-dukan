// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About_us from './pages/About_us';
import Services from './pages/Services';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const shouldAddToCart = window.confirm(`Do you want to add ${item.title} to the cart?`);
    if (shouldAddToCart) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header /><Home addToCart={addToCart} /></>} />
        <Route path='/cart' element={<><Header /><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></>} />
        <Route path='/contact' element={<><Header /><Contact /></>} />
        <Route path='/about_us' element={<><Header /><About_us /></>} />
        <Route path='/services' element={<><Header /><Services /></>} />
        <Route path='/login' element={<><Header /><LoginPage /></>} />
        <Route path='/signup' element={<><Header /><SignupPage /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
