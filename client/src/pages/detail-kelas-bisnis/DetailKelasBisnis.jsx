import React, { useEffect } from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";

function DetailKelasBisnis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection />
      <MainSection />
    </div>
  );
}

export default DetailKelasBisnis;
