'use client';
import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { afroCelebrationForms } from "@/Components/admins/forms/afroCelebrationForms";

const AfroTopbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  // Extract categories (Crafts, Others) and their subcategories (e.g., Craftsmen, Artisans)
  const categories = Object.keys(afroCelebrationForms);
  const subCategories = selectedCategory
    ? Object.keys(afroCelebrationForms[selectedCategory])
    : [];

  return (
    <div className="py-2 px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      {/* Search Section */}
      <div className="flex w-full md:w-auto items-center bg-gray-100 rounded-full px-4 py-2">
        <FaBars
          className="text-gray-600 mr-3 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm outline-none text-gray-600 placeholder-gray-500 w-full"
        />
        <FaSearch className="text-gray-600 ml-3" />
      </div>

      {/* Menu Items */}
      <div
        className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center md:flex ${
          menuOpen ? "flex" : "hidden md:flex"
        } w-full md:w-auto`}
      >
        {/* Category Dropdown */}
        <select
          className="bg-gray-100 text-sm text-gray-600 py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-black w-full md:w-auto"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubCategory(""); // Reset subcategory when category changes
          }}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Subcategory Dropdown */}
        {subCategories.length > 0 && (
          <select
            className="bg-gray-100 text-sm text-gray-600 py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-black w-full md:w-auto"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option value="">Select Subcategory</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default AfroTopbar;
