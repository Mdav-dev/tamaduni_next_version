import React from "react";
import Image from "next/image";

const LeftImage = () => {
  return (
    <section className="hidden md:block w-1/2">
      <Image
        src="https://images.unsplash.com/photo-1737157998574-2a75f0c52a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2Mzg3NTd8MHwxfGFsbHwxfHx8fHx8fHwxNzM3Mjk3ODc3fA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="login"
        width={500}
        height={800}
        className="w-full h-full object-cover"
      />
  
    </section>
  );
};

export default LeftImage;
