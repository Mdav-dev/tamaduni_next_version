import React, { useState } from "react";
import data from "./data.json";
import Image from "next/image";

const List = () => {
  // State to track the selected person
  const [selectedMuseum, setSelectedMuseum] = useState(data[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (person) => {
    setSelectedMuseum(person);
    setShowDetails(true);

    if (window.innerWidth < 768) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="flex flex-col  h-full md:flex-row space-x-0 md:space-x-4">
      <section
        className={`${
          showDetails ? "flex md:hidden " : "flex"
        } w-full md:w-1/2 flex-col`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center bg-gray-100 p-2 rounded-lg mb-4 cursor-pointer ${
              selectedMuseum && selectedMuseum.name === item.name
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => handleClick(item)}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900 text-white flex items-center justify-center mr-2">
              {item.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-sm font-bold mb-1">{item.name}</h3>
              <p className="text-xs text-gray-600">{item.location}</p>
            </div>
          </div>
        ))}
      </section>

      <section
        className={` h-full relative ${
          showDetails ? " hidden md:flex gap-2 w-full" : "hidden"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={handleCloseDetails}
        >
          &times;
        </button>
        <section
          className="w-full md:w-1/2 overflow-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-300
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {selectedMuseum.image?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={selectedMuseum.name}
              className="w-full  object-cover rounded-lg mb-4"
            />
          ))}
        </section>
        <section className="h-full w-full md:w-1/2 bg-gray-300 p-4 rounded-lg shadow-lg flex flex-col justify-start items-center space-y-4">
          <h3 className="text-lg font-bold mb-2">{selectedMuseum.name}</h3>
          <h3 className="text-sm text-gray-600 mb-2">
            Location: {selectedMuseum.location}
          </h3>
          <h3 className="text-sm font-bold">Description</h3>
          <p className="text-sm text-gray-600 mb-4 text-center">
            {selectedMuseum.description}
          </p>
        </section>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:hidden">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-3/4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2 text-center">
              {selectedMuseum.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2 text-center">
              Location: {selectedMuseum.location}
            </p>
            <h3 className="text-sm font-bold text-center">Description</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {selectedMuseum.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
