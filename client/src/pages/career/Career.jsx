import React from "react";
import HeroSection from "../../components/career/hero-section/HeroSection";
import Section_2 from "../../components/career/section_2/Section_2";
import MomenSection from "../../components/career/momen-section/MomenSection";


function Career() {
    return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <Section_2 />
      <MomenSection />
    </div>
    );
}

export default Career;