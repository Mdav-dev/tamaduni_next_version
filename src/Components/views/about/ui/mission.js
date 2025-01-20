import React from "react";

const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vision */}
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C13.657 2 15 3.343 15 5s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600 text-lg">
          To create a world where technology empowers people and businesses to
          achieve more.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M6 16h6M6 10h6m7 10v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6m-2 0h6M4 6h16M4 10h16m0 0V6m-16 4v6"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 text-lg">
          We strive to deliver innovative, user-centric, and sustainable
          solutions that meet the ever-evolving needs of our clients and
          communities.
        </p>
      </div>
    </div>
  );
};

export default Mission;
