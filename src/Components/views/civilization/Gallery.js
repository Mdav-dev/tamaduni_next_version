import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
  //   "/items/civilization.png",
  "https://images.unsplash.com/photo-1622322977888-53fd8105fdc4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1650696347800-6dcffd62153e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(images.length - 1);
      }
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className={`w-full h-full relative transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300"
      >
        <FaAngleLeft className="text-gray-600" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300"
      >
        <FaAngleRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default Gallery;
