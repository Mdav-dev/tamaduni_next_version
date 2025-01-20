import React from "react";
import { Almendra } from "next/font/google";

const almandra = Almendra({
  subsets: ["latin"],
  weight: "400", // Specify the weight if needed (e.g., '400')
  display: "swap", // Optional: control how the font is displayed
});

const Hero = () => {
  return (
    <div>
      <div className="relative bg-hero-pattern bg-cover bg-center h-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-[#1F007DC2]"></div>

        <div className="text-center z-10 lg:px-[15%] md:px-[10%] sm:px-5">
          <p
            className={`text-white text-xl md:text-2xl font-almendra p-4 ${almandra.className}`}
          >
            Africanacity is the rhythm of resilience, the melody of diversity,
            and the harmony of strength. It&#39;s the celebration of a
            continent&#39;s spirit, echoing through time with the vibrant beats
            of innovation, creativity, and unity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
