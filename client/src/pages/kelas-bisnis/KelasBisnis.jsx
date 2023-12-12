import React from "react";
import HeroSection from "../../components/kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/kelas-bisnis/main-section/MainSection";

function KelasBisnis() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <MainSection />
    </div>
  );
}

export default KelasBisnis;
