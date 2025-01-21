"use client"
import ContentSlider from "@/Components/views/culturalMapping/Content";
import CulturalTopbar from "@/Components/views/culturalMapping/CulturalTopBar";
import React, {useState} from "react";

function Page() {

const [selectedValues, setSelectedValues] = useState({ category: "", subCategory: "" });

  // Function to receive selected values from AfroTopbar
  const handleSelectionChange = (category, subCategory) => {
    setSelectedValues({ category, subCategory });
  };

  return <div>
    <CulturalTopbar onSelectionChange={handleSelectionChange} />
     <ContentSlider selectedValues = {selectedValues}/>
  </div> ;
}

export default Page;
