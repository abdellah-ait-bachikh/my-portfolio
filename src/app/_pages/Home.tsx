
import HeroSection from "@/components/HeroSection";
import React from "react";

const Home =  () => {
  return (
    <div className="w-full  flex items-center justify-center " id="">
      <section className="container mt-10 mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
       <HeroSection/>
      </section>
      
    </div>
  );
};

export default Home;
