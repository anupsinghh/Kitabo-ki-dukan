import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Made by{' '}
          <span className="profile-link" title="Visit LinkedIn profile">
            <a href="https://www.linkedin.com/in/connectanupsingh/" target="_blank" rel="noopener noreferrer">
              <span className="anup-singh">ANUP SINGH</span>
            </a>
          </span>
          <span className="line"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
