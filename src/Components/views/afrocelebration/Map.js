"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet and custom marker images
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Configure the default icon for Leaflet
const DefaultIcon = L.icon({
  iconUrl: markerIconPng.src, // Ensure the iconUrl points to the correct source
  shadowUrl: markerShadowPng.src, // Ensure the shadowUrl points to the correct source
  iconAnchor: [12, 41], // Adjust anchor as needed
  popupAnchor: [0, -41], // Adjust popup anchor as needed
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  return (
    <div className="w-full h-full">
      {" "}
      {/* Adjust width and height as necessary */}
      <MapContainer
        center={[0.3476, 32.5825]}
        zoom={13}
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
    </div>
  );
};

export default MapComponent;
