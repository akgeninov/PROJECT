import React from "react";
import HeadSection from "../../components/tentang-kelas/head-section/HeadSection";
import MainMateri from "../../components/tentang-kelas/main-materi/MainMateri";
import UlasanSection from "../../components/tentang-kelas/ulasan-section/UlasanSection";

function TentangKelas() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeadSection />
      <MainMateri />
      <UlasanSection />
    </div>
  );
}

export default TentangKelas;
