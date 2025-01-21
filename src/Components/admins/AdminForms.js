import React, { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm";
import { formsConfig } from "./formsConfig";
import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "@/hooks/urls";

const AdminsForms = () => {
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false)
  
  setTimeout(() => setShowMessage(true), 5000);


  

  const getDynamicUrl = () => {
    if (!selectedModule || !selectedSubcategory) {
      return null;
    }
    return `${base_url}${selectedModule}/${selectedSubcategory}`;
  };

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
    setSelectedCategory("");
    setSelectedSubcategory("");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const subcategories =
    selectedModule && selectedCategory
      ? Object.keys(formsConfig[selectedModule][selectedCategory])
      : [];

  const fields =
    selectedModule && selectedCategory && selectedSubcategory
      ? formsConfig[selectedModule][selectedCategory][selectedSubcategory]
      : [];

  const handleSubmit = async (formData) => {
    try {
      const token = Cookies.get("authToken");

      if (!token) {
        setResponseMessage("No token found. Please log in.");
        return;
      }
     

      const dynamicUrl = getDynamicUrl();

      if (!dynamicUrl) {
        setResponseMessage("Invalid selection. Please select all options.");
        return;
      }

      const response = await axios.post(dynamicUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponseMessage(response.data.message || "Request successful");
    } catch (error) {
      setResponseMessage(
        `Error: ${error.response?.data?.message || "Request failed"}`
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admins Form</h1>

      {/* Module Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Module:
        </label>
        <select
          value={selectedModule}
          onChange={handleModuleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Module --</option>
          {Object.keys(formsConfig).map((module) => (
            <option key={module} value={module}>
              {module}
            </option>
          ))}
        </select>
      </div>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Category:
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Category --</option>
          {selectedModule &&
            Object.keys(formsConfig[selectedModule]).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>

      {/* Subcategory Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Subcategory:
        </label>
        <select
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Subcategory --</option>
          {selectedCategory &&
            Object.keys(formsConfig[selectedModule][selectedCategory]).map(
              (subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              )
            )}
        </select>
      </div>

      {/* Dynamic Form Rendering */}
      {fields.length > 0 && (
        <DynamicForm
          formTitle={selectedSubcategory}
          fields={fields}
          onSubmit={handleSubmit}
        />
      )}

      {showMessage && (
        <div
          className={`mt-4 p-3 rounded-md text-white shadow-md ${
            responseMessage.startsWith("Error")
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default AdminsForms;
