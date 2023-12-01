import React from "react";
import { images } from "../../../constants";

function HeroSection() {
  return (
    <div className="hidden sm:flex bg-black500 w-full  2xl:max-w-[1080px] ">
      <div className="relative flex  w-full justify-end items-center">
        <img src={images.geometricShapeArtikelDesktop} alt="" className="" />
        <div className="flex flex-col absolute left-0 ml-[100px] gap-[16px]">
          <h1 className="text-[48px] font-bold leading-[72px] text-whiteSmoke500 left-[100px] max-w-[572px]">
            Artikel Menarik untuk Kembangkan Bisnismu
          </h1>
          <p className="text-[18px] font-light text-whiteSmoke600 w-[572px]">
            Temukan wawasan mendalam, strategi terkini, dan tips praktis yang
            dapat langsung diterapkan untuk mengembangkan bisnismu ke level
            berikutnya
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
