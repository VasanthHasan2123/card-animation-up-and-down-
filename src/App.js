import React from 'react';
import './App.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

function App() {
  const cardNames = [
    "Jacob Jones", "Henry", "Johns", "Joseph", "Meenakshi", "Sam",
    "Joshva", "Swathi", "Hasani", "Vasanth", "Saratha", "Lalitha"
  ];

  const images = [image1, image2, image3];

  return (
    <div className="App">
      <header className="custom-header">
        <p>What User Says</p>
      </header>
      <div className="testimonial-header">
      <p >
        Testimonials that speak louder than words! Customer stories that light up our day.
      </p>
      </div>
      <div className="marquee-container">
        <div className="cards">
          {cardNames.map((name, index) => (
            <div key={index} className="card">
              <img src={images[index % images.length]} alt={`Image for ${name}`} className="card-image" />
              <span>{name}</span>
              <p className="card-content">
                As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
