import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <h1>About Us</h1>
      <p><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam.
        Sed nisi.
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed augue semper porta.
        Mauris massa. Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h2>
        
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <img src="lib-1.jpg" alt="lib" style={{ width: '30%', borderRadius: '8px', marginBottom: '10px' }} />
        <img src="lib-2.jpg" alt="lib" style={{ width: '30%', borderRadius: '8px', marginBottom: '10px' }} />
        <img src="lib-1.jpg" alt="lib" style={{ width: '30%', borderRadius: '8px', marginBottom: '10px' }} />
      </div>
    </div>
  );
};

export default AboutUs;
