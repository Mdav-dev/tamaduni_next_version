import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1606919637092-f51fdf604650?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Integrity"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-gray-800 group-hover:text-purple-500 transition-colors">
              Integrity
            </h3>
            <p className="text-gray-600 text-center mt-2 px-4">
              We believe in doing the right thing, always.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1589828994379-7a8869c4f519?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Innovation"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-gray-800 group-hover:text-green-500 transition-colors">
              Innovation
            </h3>
            <p className="text-gray-600 text-center mt-2 px-4">
              We push the boundaries to bring new ideas to life.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1606919637092-f51fdf604650?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teamwork"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-gray-800 group-hover:text-yellow-500 transition-colors">
              Teamwork
            </h3>
            <p className="text-gray-600 text-center mt-2 px-4">
              Together, we achieve more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
