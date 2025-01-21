"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { afroCelebrationForms } from "@/Components/admins/forms/afroCelebrationForms";
import axios from "axios";

const AfroTopbar = ({ onSelectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Extract categories and subcategories
  const categories = Object.keys(afroCelebrationForms);
  const subCategories = selectedCategory
    ? Object.keys(afroCelebrationForms[selectedCategory])
    : [];

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`${base_url}afrocelebration/search`);
        setSearchData(response.data.searchData || []);
        console.log("Search Results:", response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchSearchResults();
  }, []);

  useEffect(() => {
    if (selectedCategory && selectedSubCategory) {
      onSelectionChange(selectedCategory, selectedSubCategory);
    }
  }, [selectedCategory, selectedSubCategory, onSelectionChange]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div className="py-2 px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <div className="flex w-full md:w-auto items-center bg-gray-100 rounded-full px-4 py-2 relative">
        <FaBars
          className="text-gray-600 mr-3 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm outline-none text-gray-600 placeholder-gray-500 w-full"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FaSearch className="text-gray-600 ml-3" />
        {filteredResults.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
            {filteredResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSearchTerm(result);
                  setFilteredResults([]);
                }}
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center md:flex ${
          menuOpen ? "flex" : "hidden md:flex"
        } w-full md:w-auto`}
      >
        <select
          className="bg-gray-100 text-sm text-gray-600 py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-black w-full md:w-auto"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubCategory("");
          }}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

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
