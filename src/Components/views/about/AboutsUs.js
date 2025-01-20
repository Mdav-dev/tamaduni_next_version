import React from "react";
import Image from "next/image";
import Link from "next/link";
import CoreValues from "./ui/coreValues";
import Mission from "./ui/mission";
import Team from "./ui/team";
import Hero from "./ui/hero";
import OurStory from "./ui/ourStory";
import WorkTogether from "./ui/workTogether";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-16">
      <Hero />

      <OurStory />

      <CoreValues />

      <Team />

      <WorkTogether />
    </div>
  );
};

export default AboutUs;
