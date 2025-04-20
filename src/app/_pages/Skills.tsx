import Card from "@/components/Card";
import { skills } from "@/lib/constance";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen mt-1 flex items-center justify-center"
    >
      <div className="conatiner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  text-center">
        {skills.map((e) => (
          <Card key={e.id} img={e.image} label={e.label} year={e.year} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
