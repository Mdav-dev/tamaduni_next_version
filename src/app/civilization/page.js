"use client";
import CivilizationTopbar from "@/Components/views/civilization/CivilizationTopbar";
import dynamic from "next/dynamic";
import React from "react";

//import CivilizationContent and dissable ssr
const CivilizationContent = dynamic(
  () => import("@/Components/views/civilization/Content"),
  { ssr: false }
);

function page() {
  return (
    <div>
      <CivilizationTopbar />
      <CivilizationContent />
    </div>
  );
}

export default page;
