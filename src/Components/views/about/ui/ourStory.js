import React from "react";
import Mission from "./mission";

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="text-center bg-gradient-to-b from-gray-50 to-gray-100 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
          Founded in 2010, we started with a vision to revolutionize the
          industry with technology-driven solutions. From humble beginnings to
          becoming industry leaders, our journey has been defined by innovation
          and perseverance.
        </p>

        <Mission />
      </div>
    </section>
  );
};

export default OurStory;
