import React from "react";
import HeroSection from "../../components/home/hero-section/HeroSection";
import ClientSection from "../../components/home/client-section/ClientSection";

function Home() {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <ClientSection />
    </div>
  );
}

export default Home;
