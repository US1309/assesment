import React, { useState } from 'react';
import '../styles/slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://www.w3schools.com/howto/img_lights_wide.jpg',
        'https://www.w3schools.com/howto/img_snow_wide.jpg',
        'https://www.w3schools.com/howto/img_mountains_wide.jpg',
        'https://www.w3schools.com/howto/img_nature_wide.jpg'
    ];
    const totalSlides = slides.length;

    const showSlide = (index) => {
        const normalizedIndex = (index + totalSlides) % totalSlides;
        setCurrentSlide(normalizedIndex);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    return (
        <div className="containerSlider">
            <div className="container2" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Image ${index + 1}`}
                        className="carousel-image"
                        onError={(e) => { e.target.src = 'https://www.w3schools.com/howto/img_nature_wide.jpg'; }}
                    />
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
