"use client";
import Image from "next/image";
import React from "react";
import { Allerta_Stencil, Anek_Devanagari, Arya } from "next/font/google";
import Link from "next/link";
import useAuth from "@/Components/authentication/useAuth";
import { useRouter } from "next/navigation";

const allertaStencil = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const anekDevanagari = Anek_Devanagari({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const arya = Arya({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Item = ({ title, content, image, buttonText, reverse, link = "#" }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleButtonClick = () => {
    if (!user) {
      router.push("/auth/login");
    } else {
      router.push(link);
    }
  };

  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center justify-between md:mb-12 md:h-[500px]
         ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col justify-center items-center md:justify-around md:w-1/2 p-6 h-full">
        <h2
          className={`text-2xl md:text-3xl font-bold mb-4 text-center md:text-left ${allertaStencil.className}`}
        >
          {title}
        </h2>
        <p
          className={`text-sm md:text-base mb-6 text-center font-anek-devanagari ${anekDevanagari.className}`}
        >
          {content}
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleButtonClick}
            className={`font-bold font-arya text-2xl sm:text-3xl px-6 py-3 rounded transition duration-300 ${arya.className}`}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Adjusted Image Section */}
      <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center p-4 h-80 md:h-full">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
