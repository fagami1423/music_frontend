import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(images[currentIndex]);
  const length = images.length;

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    console.log(currentIndex);
    setUser(images[currentIndex]);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    console.log(currentIndex);
    setUser(images[currentIndex]);
  };

  return (
    <div className="slider">
        <FaChevronLeft className="prev-icon" onClick={goToPrevSlide} />
        <FaChevronRight className="next-icon" onClick={goToNextSlide} />
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
            <div key={index} className="slider-item">
                <img src={image.image} height="400" width="400" alt={image.alt} />
            </div>
           
            ))}
        </div>
        <div className="slider-indicators">
            {images.map((_, index) => (
            <div
                key={index}
                className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
            />
            ))}
        </div>
        <div ClassName="slider-content">
            <h1>{user.name}</h1>
            <h2>{user.designation}</h2>
            <p>{user.text}</p>


        </div>
        
    </div>
  );
};

export default ImageSlider;
