import React from 'react';
import './AboutUs.css'; // Import your CSS file
import image1 from '../components/lib-1.jpg';
import image2 from '../components/lib-2.jpg';
import image3 from '../components/lib-3.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container"style={{ paddingTop: '40px' }}>
      <h1>About Us</h1>
      <p>
        <h2>
        We are a dynamic book exchange platform that facilitates the seamless buying or renting of books directly from the student community. Our unique approach aims to create an interconnected space where students can easily share, sell, or rent their academic resources with one another. By leveraging the collective knowledge of the student body, we empower users to access required textbooks conveniently and at affordable prices. Whether you're looking to purchase a textbook for a specific course or explore cost-effective rental options, our platform fosters a collaborative environment, making educational resources more accessible to every student. Join our community to not only save on academic materials but also contribute to a sustainable and student-driven approach to book sharing.
        </h2>
      </p>
      <div className="image-row">
        <div className="image-card">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="image-card">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="image-card">
          <img src={image3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
