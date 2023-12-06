import React, { useEffect } from "react";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import { dataKomunitas } from "./../../../constants/data";
import NavigasiKomunitas from "./navigasi-komunitas/NavigasiKomunitas";
import { useParams } from "react-router-dom";

export default function HeroSection() {
  const { title } = useParams();
  let index = 1;
  if (title === "komunitas-bisnis") {
    index = 0;
  }
  return (
    <div
      className="bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[544px] lg:h-[544px] flex flex-col"
      style={{ backgroundImage: `url(${dataKomunitas[index].pic})` }}
    >
      <div className="bg-[rgba(15,16,17,0.95)] bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[544px] lg:h-[544px] absolute left-0 z-0 "></div>
      <div className="z-10">
        <div className="mt-[24px] gap-[8px]">
          {/* <h1 className="text-whiteSmoke500">Breadcrumb</h1> */}
          <NavigasiKomunitas />
        </div>
        <div className="flex gap-[80px] mt-[60px]">
          <div className="flex flex-col w-[250px] lg:w-[568px]  overflow-hidden gap-[52px]">
            <div className="flex flex-col max-w-[568px] gap-[8px] lg:gap-[16px]">
              <h1 className=" text-whiteSmoke500 text-[28px] lg:text-[48px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
                {dataKomunitas[index].title}
              </h1>
              <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke500 text-center lg:text-start">
                Ayo bergabung dengan para penggerak industri kreatif untuk
                bertukar ide, mendapatkan inspirasi, dan memperluas jaringanmu.
              </p>
            </div>

            {/* <button className=" h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
                <p className="text-black500 text-[16px] font-medium leading-[24px]">
                  Selengkapnya
                </p>
              </button> */}
            <ButtonWhiteSmoke500
              WIDTH={"w-[260px]"}
              TEXT_BUTTON={"Selengkapnya"}
            />
          </div>

          <div className="flex flex-col items-center min-w-[352px] overflow-hidden rounded-[10px]">
            <img
              src={dataKomunitas[index].pic}
              alt="komunitas"
              className={
                "gap-[52px] flex flex-col   min-w-fit h-[352px]  xl:min-w-fit rounded-[10px]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
