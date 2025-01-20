import React from "react";

const LeftContainer = () => {
  return (
    <div className="flex flex-col gap-4  w-full mb-4">
      <section className="flex flex-col gap-4 items-center bg-gray-200 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">GROUP</h1>
        <h2 className=" font-semibold">BANTU</h2>
        <p className="text-gray-600 text-center">
          Bantu people are an indigenous group of people in Africa. Initially
          located in central Africa, they later spread to other parts of the
          continent. This diverse group speaks Bantu languages and are currently
          found in Eastern, Central, and Southern Africa
        </p>
      </section>
      <section className="flex flex-col gap-4 items-center bg-gray-200 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">Timeline Synosis</h1>
        <h2 className=" font-semibold">3000 BCE</h2>
        <p className="text-gray-600 text-center">
          The drying of the Sahara around 300B BCE engendered population
          redistribution that occurred over centuries. Retreat of rainforest in
          favor of patches of savannah in parts of West Central facilitated the
          immigration of agriculturalists from the north
        </p>
      </section>
    </div>
  );
};

export default LeftContainer;
