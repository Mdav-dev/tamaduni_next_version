"use client";
import DETopbar from "@/Components/views/digitalethnography/DETopbar";
import dynamic from "next/dynamic";
import React from "react";

const DEContent = dynamic(
  () => import("@/Components/views/digitalethnography/Content"),
  { ssr: false }
);

function page() {
  return (
    <div>
      <DETopbar />
      <DEContent />
    </div>
  );
}

export default page;
