import React from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";

function DetailKelasBisnis() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection />
      <MainSection />
    </div>
  );
}

export default DetailKelasBisnis;
