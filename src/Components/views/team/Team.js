import React from "react";
import team from "./data.json";
import Profile from "./Profile";

const Team = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      <div className="absolute inset-0 top-0 bg-gray-200 h-32 md:h-48 z-0"></div>

      <h1 className="relative z-10 text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our Team
      </h1>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {team.map((member) => (
          <Profile
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
