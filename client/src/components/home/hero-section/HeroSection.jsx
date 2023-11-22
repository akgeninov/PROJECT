import React from "react";
import { images } from "../../../constants";

function HeroSection() {
  return (
    <div className="flex  gap-[52px] h-[504px] justify-center items-center shrink-0 mt-[80px] mb-[80px]">
      <div className="flex px-[5px] sm:px-[100px] lg:px-0 lg:w-[628px] flex-initial flex-col w-screen items-start gap-[52px] ">
        <div className="flex  flex-col items-start gap-[16px] w-full md:w-[628px]">
          <p className="text-[40px] sm:text-[50px] font-bold uppercase leading-[64px]">
            Raih <span className="text-indigoDye500">Peluang</span> Tingkatkan{" "}
            <span className="text-indigoDye500">Bisnismu</span>
          </p>
          <p className="text-[18px] leading-[28px] font-light max-w-[536px]">
            Temukan informasi, kesempatan dan koneksi yang bisnis kamu butuhkan
            untuk berkembang dan bertumbuh disini
          </p>
        </div>
        <button className="flex mx-[5px] sm:mx-0 w-[260px] px-[64px] py-[18px] justify-center items-center bg-black500 rounded-[10px]">
          <p className="text-whiteSmoke500 font-medium text-[16px]">
            Gabung Sekarang
          </p>
        </button>
      </div>

      <img
        className="hidden  lg:flex flex-initial w-[320px] xl:w-[400px] "
        src={images.vector2}
        alt="vector2"
      />
    </div>
  );
}

export default HeroSection;
