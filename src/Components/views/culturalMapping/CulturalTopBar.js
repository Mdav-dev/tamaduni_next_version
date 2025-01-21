"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { culturalMappingForms } from "@/Components/admins/forms/culturalMappingForms";
import { base_url } from "@/hooks/urls";
import axios from "axios";


const CulturalTopbar = ({ onSelectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
   const [searchData, setSearchData] = useState([])

  // Extract categories and subcategories
  const categories = Object.keys(culturalMappingForms);
  const subCategories = selectedCategory
    ? Object.keys(culturalMappingForms[selectedCategory])
    : [];

    useEffect(() => {
	 const fetchSearchResults = async () => {
	   try {
		const response = await axios.get(`${base_url}afrocelebration/search`);
		setSearchData(response.data. searchData || []);
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

  return (
    <div className="py-2 px-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
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

export default CulturalTopbar;
