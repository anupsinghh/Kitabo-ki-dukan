// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <Link to="/" className="logo">KitabShare</Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">MyCart</Link>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
        </li>
        <li>
          {/* <Link to="/About_us">About</Link> */}
          <Link to="/about_us" activeClassName="active">About</Link>

        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        {/* <button className="search-button">
          <i className="fas fa-search"></i>
        </button> */}
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Header;
