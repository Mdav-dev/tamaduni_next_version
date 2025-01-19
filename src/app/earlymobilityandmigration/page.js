"use client";
import CivilizationTopbar from "@/Components/views/civilization/CivilizationTopbar";
import dynamic from "next/dynamic";
import React from "react";

//import MigrationContent and dissable ssr
const MigrationContent = dynamic(
  () => import("@/Components/views/migration/Content"),
  { ssr: false }
);

function page() {
  return (
    <>
      <CivilizationTopbar />
      <MigrationContent />
    </>
  );
}

export default page;
