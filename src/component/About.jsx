import React from 'react';
import './About.css'; // Make sure to create this CSS file as well
import cafecafe from '../images/cafecafe.jpg'; // Ensure you have an image in this path

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={cafecafe} alt="About Us" className="about-image" />
      <p>
        Welcome to CafeHunt! We are dedicated to helping you find the best cafes around.
        Whether you're looking for a cozy place to work, a spot to catch up with friends,
        or a cafe with the best coffee in town, we've got you covered.
      </p>
      <p>
        Our team of coffee enthusiasts is always on the lookout for new and exciting cafes
        to feature on our platform. We believe that every cafe has its own unique charm,
        and we're here to help you discover them.
      </p>
      <p>
        Thank you for using CafeHunt. We hope you enjoy your cafe-hunting experience!
      </p>
    </div>
  );
};

export default About;
