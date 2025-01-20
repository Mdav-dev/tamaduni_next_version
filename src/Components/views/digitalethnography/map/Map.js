"use client";

import dynamic from "next/dynamic";
import React from "react";

const MapContainer = dynamic(
  () =>
    import("react-leaflet").then((mod) => {
      return mod.MapContainer;
    }),
  { ssr: false }
);
const TileLayer = dynamic(() =>
  import("react-leaflet").then((mod) => mod.TileLayer)
);
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker));
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup));

const Map = () => {
  const comm = [
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
    "Hausa-Fulani",
  ];

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-4 gap-4">
        {comm.map((item, index) => (
          <button
            className="p-2 bg-slate-400 text-white text-center hover:bg-slate-500 transition-all duration-300"
            key={index}
          >
            <p>{item}</p>
          </button>
        ))}
      </section>
      <section className="h-[500px]">
        <MapContainer
          center={[0.3476, 32.5825]}
          zoom={4}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[0.3476, 32.5825]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default Map;
