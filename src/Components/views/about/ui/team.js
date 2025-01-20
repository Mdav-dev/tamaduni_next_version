import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">
          Meet the Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up">
          Get to know the brilliant minds behind our success.
        </p>{" "}
        <div className="flex justify-center space-x-4 mb-12">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 6v-5l-9-5 9-5 9 5-9 5v5z"
              />
            </svg>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 6v-5l-9-5 9-5 9 5-9 5v5z"
              />
            </svg>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 6v-5l-9-5 9-5 9 5-9 5v5z"
              />
            </svg>
          </div>
        </div>
        <Link
          href="/team"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl animate-fade-in-up"
        >
          Meet Our Team
        </Link>
      </div>
    </section>
  );
};

export default Team;
