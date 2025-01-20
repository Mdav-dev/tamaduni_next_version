"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const scrollToStory = () => {
    const story = document.getElementById("our-story");
    story.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative w-full h-[500px]">
      <Image
        src={
          "https://images.unsplash.com/photo-1606919637092-f51fdf604650?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="About Us"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to Our World
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            Building a better tomorrow through innovation, passion, and
            dedication.
          </p>
        </div>

        {/* See More Button */}
        <button
          onClick={scrollToStory}
          className="mt-8 px-6 py-3 bg-white text-gray-800 text-lg rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Hero;
