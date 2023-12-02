import React, { useEffect, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonWhiteSmoke500 from './../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500';

export default function JoincomunitySection() {
    return(
        <div className=" mt-[60px] lg:mt-[160px]  w-fit flex flex-col items-center gap-[52px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-[8px] lg:gap-[16px]"
      >
        <h1 className="text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] max-w-[700px] text-center">
          Temukan Momen Berkualitas Bersama Komunitas
        </h1>
      </div>
      {/* <button className="flex bg-black500 hover:bg-whiteSmoke800 px-[64px] py-[16px] justify-center items-center rounded-[10px] w-[260px]">
        <p className="shrink-0 text-whiteSmoke500 text-[16px] font-medium leading-[24px]">
          
        </p>
      </button> */}
      <ButtonWhiteSmoke500 TEXT_BUTTON={"Gabung Komunitas"} WIDTH={"w-[260px]"} />
    </div>
    );
}