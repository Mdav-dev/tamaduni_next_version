"use client";
import React, { useState } from "react";
import { FaGalacticRepublic, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import Map from "./map/Map";
import Gallery from "./Gallery";

const RightContainer = () => {
  const [selectedTab, setSelectedTab] = useState("gallery");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="w-full p-2 overflow-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="mt-2">
          <h1 className="text-2xl font-bold">Migration</h1>
          <p className="text-xl text-gray-600">
            <strong>Group: </strong>Global Migrations
          </p>
          <p className="text-xm text-gray-600 italic font-semibold">
            <strong>Era: </strong>Prehistoric to Modern Migrations
          </p>
        </div>
        <div className="flex space-x-2">
          <FaGalacticRepublic
            size={24}
            className={`cursor-pointer p-1 ${
              selectedTab === "gallery"
                ? "text-black bg-slate-400 text-xl"
                : "text-gray-600 text-lg"
            }`}
            onClick={() => handleTabClick("gallery")}
          />
          <FaMapMarkerAlt
            size={24}
            className={`cursor-pointer p-1 ${
              selectedTab === "map"
                ? "text-black bg-slate-400 text-xl"
                : "text-gray-600 text-lg"
            }`}
            onClick={() => handleTabClick("map")}
          />
        </div>
      </div>
      <div className="mt-2 h-96 md:h-[500px] lg:h-[700px]">
        {
          // Dynamic Content Area
          selectedTab === "gallery" && (
            <>
              <p className="text-center">
                Migration has been a defining characteristic of human history,
                shaping societies, cultures, and economies across the globe.
                Early human migrations were driven by the need for food, safety,
                and favorable climates, spreading populations across continents
                and giving rise to diverse civilizations. In the modern era,
                migration often occurs due to economic opportunities, conflict,
                and environmental changes. From the transatlantic migrations of
                the 19th century to contemporary refugee crises, migration has
                played a critical role in fostering cultural exchanges,
                innovation, and global connectivity. Understanding migration
                patterns helps us explore the roots of shared histories and the
                complexities of human movement.
              </p>
              <Gallery />
            </>
          )
        }
        {selectedTab === "map" && <Map />}
      </div>
    </section>
  );
};

export default RightContainer;
