import React from "react";
import HeroSection from "../../components/home/hero-section/HeroSection";
import ClientSection from "../../components/home/client-section/ClientSection";
import AboutSection from "../../components/home/about-section/AboutSection";
import ServiceSection from "../../components/home/service-section/ServiceSection";

function Home() {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}

export default Home;
