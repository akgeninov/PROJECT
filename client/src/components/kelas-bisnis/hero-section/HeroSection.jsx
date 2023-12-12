import React from "react";
import NavigasiKelasBisnis from "./navigasi-kelas-bisnis/NavigasiKelasBisnis";
import { icon, images } from "../../../constants";

function HeroSection() {
  return (
    <div className=" relative bg-black500 w-full lg:pl-[100px]  2xl:max-w-[1280px] h-[396px] lg:h-[444px]  flex items-center ">
      <div className="w-full h-full flex flex-col md:flex-row md:items-center justify-between md:justify-end">
        <img
          src={images.geometricShapeArtikelDesktop}
          alt="geo"
          className="hidden md:flex h-full"
        />
        <img
          src={images.bisnisHeroMobile1}
          alt="geo"
          className="flex md:hidden w-full"
        />
        <img
          src={images.bisnisHeroMobile2}
          alt="geo"
          className="flex md:hidden w-full"
        />
      </div>

      <div className="absolute w-full h-full flex flex-col items-center lg:items-start justify-center lg:w-fit">
        <div className="gap-[8px] ">
          <NavigasiKelasBisnis />
        </div>
        <div className="flex flex-col gap-[52px]  lg:mt-[52px]">
          <div className="flex flex-col gap-[16px] justify-center md:items-start items-center ">
            <h1 className="text-center md:text-start text-[24px] lg:text-[48px] font-bold leading-[36px] md:leading-[72px] text-whiteSmoke500 w-[256px] lg:w-[568px]">
              Kelas Bisnis
            </h1>
            <p className="text-center md:text-start text-[16px] lg:test-[18px] font-light leading-[24px] md:leading-[28px] text-whiteSmoke600 w-[358px] lg:w-[448px]">
              Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis
              kamu
            </p>
          </div>
          <div className="hidden md:flex bg-white w-full lg:w-[556px] px-[24px] py-[16px] rounded-[10px]  justify-start items-center gap-[8px]">
            <img src={icon.searchIcon} alt="search" />
            <input type="text" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
