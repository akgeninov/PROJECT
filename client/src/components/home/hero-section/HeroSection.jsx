import React from "react";
import { images } from "../../../constants";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row px-[5px] lg:px-[100px]  gap-[52px]  justify-start items-center xl:items-start xl:justify-center shrink-0 mt-[23px] sm:mt-[80px] mb-[60px] lg:mb-[80px]">
      <div className="flex  lg:px-0 lg:max-w-[628px] flex-initial flex-col  items-center lg:items-start gap-[52px] ">
        <div className="flex  flex-col items-center lg:items-start gap-[16px] w-full  xl:w-[628px]">
          <h1 className="text-[24px]  text-center lg:text-start xl:text-[50px] font-bold uppercase leading-[36px] xl:leading-[64px]">
            Raih <span className="text-indigoDye500">Peluang</span> Tingkatkan{" "}
            <span className="text-indigoDye500">Bisnismu</span>
          </h1>
          <p className=" text-center lg:text-start text-[18px] leading-[28px] font-light max-w-[536px]">
            Temukan informasi, kesempatan dan koneksi yang bisnis kamu butuhkan
            untuk berkembang dan bertumbuh disini
          </p>
        </div>
        {/* <button className="flex mx-[5px] sm:mx-0 w-[260px] px-[64px] py-[18px] justify-center items-center bg-black500 hover:bg-whiteSmoke800 rounded-[10px]">
          <p className="text-whiteSmoke500 font-medium text-[16px]">
            Gabung Sekarang
          </p>
        </button> */}
        <ButtonBlack500 WIDTH={"w-[260px]"} TEXT_BUTTON={"Gabung Sekarang"} />
      </div>
      <div className=" w-[358px] h-[504px] z-20 xl:w-[400px] ">
        {/* <img
          className=" flex-initial absolute z-20 "
          src={images.vector2}
          alt="vector2"
          style={{ filter: "brightness(0)" }}
        /> */}
        <div className=" h-fit w-fit flex justify-center items-center hero-image">
          <img
            className="object-cover h-full w-full object-center  "
            src={images.oriVector2}
            alt="vector2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
