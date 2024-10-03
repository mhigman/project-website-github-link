
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ children, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null); // To track the container

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }, [children.length]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, autoSlideInterval, nextSlide]);

  // Fix issue of not rendering next slide
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContentWrapper}>
        <div
          className={styles.carouselContent}
          ref={contentRef}
        >
          {children.map((child, index) => (
            <div key={index} className={styles.carouselItem}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className={styles.carouselButtonPrev}><svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} viewBox="0 0 330 330">
            <path fill="#70B0BA" id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
        </svg></button>
      <button onClick={nextSlide} className={styles.carouselButtonNext}><svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} viewBox="0 0 330 330">
            <path fill="#70B0BA" id="XMLID_2_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605
            l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396
            l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998
            c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
        </svg></button>
    </div>
  );
};

export default Carousel;
