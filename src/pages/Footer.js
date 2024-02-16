// Footer.js

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Made by ANUP SINGH. </p>
      </div>
    </footer>
  );
};

export default Footer;