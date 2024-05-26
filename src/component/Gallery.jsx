import React from 'react';
import './Gallery.css';
import cafecafe from '../images/cafecafe.jpg'; // Import the image
import cafe2 from '../images/cafe2.jpg'; // Import the image

// Sample data - Replace with your actual data source
const cafes = [
  { id: 1, name: 'Cafe A', image: cafe2, description: 'A cozy place with great coffee.' },
  { id: 2, name: 'Cafe B', image: cafe2, description: 'A modern cafe with delicious pastries.' },
  { id: 3, name: 'Cafe C', image: cafe2, description: 'A charming cafe with a vintage vibe.' },
  // Add more cafes as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container" style={{ backgroundImage: `url(${cafecafe})` }}>
      <h2 className="gallery-title">Cafes of the Day</h2>
      <div className="gallery-grid">
        {cafes.map((cafe) => (
          <div key={cafe.id} className="gallery-item">
            <img src={cafe.image} alt={cafe.name} className="gallery-image" />
            <div className="gallery-info">
              <h3 className="gallery-name">{cafe.name}</h3>
              <p className="gallery-description">{cafe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;