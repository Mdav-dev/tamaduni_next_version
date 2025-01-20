import Image from "next/image";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/afrocelebration/afro.jpeg"
        alt="Main Content"
        layout="fill"
        objectFit="cover" // or "contain" depending on your desired behavior
        className="rounded-lg"
      />
      {/* Navigation Arrows */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300">
        <FaAngleLeft className="text-gray-600" />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 p-1 rounded-full transition duration-300">
        <FaAngleRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default Gallery;
