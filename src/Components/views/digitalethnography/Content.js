"use client";
import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { useEffect } from "react";
import { base_url } from "@/hooks/urls";
import { useState } from "react";
import axios from "axios";

const DEContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}ethnography/search`);

        console.log("data", response.data);
        setIsError(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data!</p>;
  }

  return (
    <div className="flex flex-col md:flex-row space-x-6">
      <section className="w-full md:w-1/4">
        <LeftContainer />
      </section>
      <section className=" w-full md:w-3/4 m-0" style={{ margin: 0 }}>
        <RightContainer />
      </section>
    </div>
  );
};

export default DEContent;
