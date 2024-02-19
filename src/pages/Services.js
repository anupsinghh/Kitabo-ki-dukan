// Services.js

import React from 'react';
import buyBookImage from '../components/lib-1.jpg';
import rentBookImage from '../components/lib-2.jpg';
import exchangeBookImage from '../components/lib-3.jpg';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Buy Book',
      description: `Explore our extensive collection of books available for purchase. From bestsellers to hidden gems, we offer a diverse range of titles to cater to your reading preferences. Enjoy the convenience of owning your favorite books and building your personal library with ease.`,
      image: buyBookImage,
    },
    {
      title: 'Rent Book',
      description: `Experience the flexibility of renting books from our curated selection. Whether you're a student seeking textbooks for a semester or a casual reader exploring different genres, our book rental service provides an affordable and convenient solution. Rent, read, and return – it's a sustainable way to enjoy a variety of books without the commitment of ownership.`,
      image: rentBookImage,
    },
    {
      title: 'Exchange Book',
      description: `Embrace the joy of sharing stories by participating in our book exchange program. Connect with fellow book lovers, swap your beloved reads, and discover new literary treasures. Exchange books to foster a sense of community and promote the love of reading among our members.`,
      image: exchangeBookImage,
    },
    // Add more services as needed
  ];
  

  return (
    <div className="services-container" style={{ paddingTop: '60px' }}>
      <h2 className="large-texts">Our Services</h2>
      <p className="large-text">
        Explore our diverse range of services designed to cater to your book-related needs. Whether you're looking to buy,
        rent, or exchange books, we have you covered.
      </p>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className={`service-item ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Services;
