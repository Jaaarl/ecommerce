import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
        <div className="relative">
          <div className="overflow-hidden w-full">
            <div className="flex">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className={`w-full h-auto transition-transform duration-300 ease-in-out transform ${
                    index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-4 py-2 rounded-l"
            onClick={prevImage}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-4 py-2 rounded-r"
            onClick={nextImage}
          >
            Next
          </button>
        </div>
      );
    };


export default Carousel;
