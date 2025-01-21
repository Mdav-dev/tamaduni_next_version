"use client"
import AfroTopbar from '@/Components/views/afrocelebration/AfroTopbar'
import ContentSlider from '@/Components/views/afrocelebration/Content'
import { useState } from 'react';
import React from 'react'

function Page() {
  const [selectedValues, setSelectedValues] = useState({ category: "", subCategory: "" });

  // Function to receive selected values from AfroTopbar
  const handleSelectionChange = (category, subCategory) => {
    setSelectedValues({ category, subCategory });
  };
  return (
    <div>
       <AfroTopbar onSelectionChange={handleSelectionChange} />
      <ContentSlider selectedValues={selectedValues} />
    </div>
  )
}

export default Page
