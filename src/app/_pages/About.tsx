import LanguageSwitcher from "@/components/LanguageSwitcher";
import React from "react";

const About = async () => {
  return (
    <div className="h-screen conatiner  mt-1 " id="about">
      About
      <LanguageSwitcher />
    </div>
  );
};

export default About;
