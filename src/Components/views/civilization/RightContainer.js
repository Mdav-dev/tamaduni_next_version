"use client";
import React, { useState } from "react";
import { FaGalacticRepublic, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import MapComponent from "../culturalMapping/Map";
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
          {/* Change the title and metadata */}
          <h1 className="text-2xl font-bold">Civilization</h1>
          <p className="text-xl text-gray-600">
            <strong>Group: </strong>Ancient Civilizations
          </p>
          <p className="text-xm text-gray-600 italic font-semibold">
            <strong>Era: </strong>Mesopotamia and Ancient Egypt (3500 - 3000
            BCE)
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
                The development of early civilizations marked a significant
                transition in human history. Mesopotamia, often regarded as the
                &quot;cradle of civilization,&quot; witnessed the rise of
                city-states, advancements in agriculture, and the creation of
                the first writing system, cuneiform. Ancient Egypt, flourishing
                along the Nile River, developed monumental architecture like
                pyramids, intricate irrigation systems, and a centralized
                government ruled by pharaohs. These civilizations laid the
                foundation for complex societies, trade networks, and cultural
                innovations that would influence generations to come.
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
