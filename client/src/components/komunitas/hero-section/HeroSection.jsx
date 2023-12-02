import React, { useEffect } from "react";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import {komunitasPic} from "./../../../constants";

export default function HeroSection() {
  return (
    <div className="bg-komunitasKontenCreatorPic bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[544px] lg:h-[832px] flex  bg-fixed">
      <div className="flex flex-col h-[250px] lg:h-[340px]  overflow-hidden">
        <div className="flex flex-col max-w-[472px] gap-[8px] lg:gap-[16px]">
          <h1 className=" text-whiteSmoke500 text-[22px] lg:text-[40px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
            Komunitas Konten Kreator
          </h1>
          <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke600 text-center lg:text-start">
            Ayo bergabung dengan para penggerak industri kreatif untuk bertukar
            ide, mendapatkan inspirasi, dan memperluas jaringanmu.
          </p>
        </div>

        {/* <button className=" h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
                <p className="text-black500 text-[16px] font-medium leading-[24px]">
                  Selengkapnya
                </p>
              </button> */}
        <ButtonWhiteSmoke500 WIDTH={"w-[260px]"} TEXT_BUTTON={"Selengkapnya"} />
      </div>

      <div className="flex flex-col items-center min-w-[352px] overflow-hidden rounded-[10px]">
        <img
          src={komunitasPic.komunitasKontenCreator}
          alt="komunitas"
          className={'gap-[52px] flex flex-col   min-w-[352px]  min-h-max  xl:min-w-[352px] rounded-[10px]'}
        />
      </div>
    </div>
  );
}
