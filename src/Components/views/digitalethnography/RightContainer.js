"use client";
import React, { useState } from "react";
import { FaGalacticRepublic, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import MapComponent from "../culturalMapping/Map";
import Map from "./map/Map";
import Gallery from "../culturalMapping/Gallery";

const RightContainer = () => {
  const [selectedTab, setSelectedTab] = useState("gallery");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="w-full p-2">
      <div className="flex justify-between items-center mb-2">
        <div className=" mt-2 ">
          <h1 className="text-2xl font-bold">Natural Catastrophes</h1>
          <p className="text-xl text-gray-600 ">
            <strong>Group: </strong>Bantu
          </p>
          <p className="text-xm text-gray-600 italic font-semibold">
            <strong>Group: </strong>Ancient History 3500 - 3000 BCE
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
          {/* <FaGlobe
            size={24}
            className={`cursor-pointer p-1 ${
              selectedTab === "list"
                ? "text-black bg-slate-400 text-xl "
                : "text-gray-600 text-lg"
            }`}
            onClick={() => handleTabClick("list")}
          /> */}
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
                The drying of the Sahara around 3000 BCE engendered population
                redistribution that occurred over centuries. Retreat of
                rainforest in favor of patches of savannah in parts of West -
                Central facilitated the immigration of agriculturalists from the
                north. This process appears to have contributed to the southward
                spread of Bantu languages from their homeland in the Cameroon
                grasslands toward eastern and western axes of dispersion
                corresponding with the main split between West and East Bantu in
                West Central Africa and the Great Lakes region, respectively.
                Studies based on lexicostatistics advanced several hypotheses on
                the subsequent spread and diversification of Bantu all the way
                to eastern South Africa over an area of more than 11 million
                km2.
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
