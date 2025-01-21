"use client";
import CivilizationTopbar from "@/Components/views/civilization/CivilizationTopbar";
import dynamic from "next/dynamic";
import React, {useState}from "react";

//import CivilizationContent and dissable ssr
const CivilizationContent = dynamic(
  () => import("@/Components/views/civilization/Content"),
  { ssr: false }
);

function Page() {
  const [selectedValues, setSelectedValues] = useState({ category: "", subCategory: "" });

  // Function to receive selected values from AfroTopbar
  const handleSelectionChange = (category, subCategory) => {
    setSelectedValues({ category, subCategory });
  };

  return (
    <div>
      <CivilizationTopbar onSelectionChange={handleSelectionChange}/>
      <CivilizationContent selectedValues={selectedValues}/>
    </div>
  );
}

export default Page;
