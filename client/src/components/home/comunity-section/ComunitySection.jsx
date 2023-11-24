import React from "react";
import { komunitasPic } from "../../../constants";

function ComunitySection() {
  return (
    <div className="hidden gap-[50px] flex text-[100px] flex-col overflow-y-scroll justify-start items-center  py-[80px] bg-komunitySection bg-no-repeat px-[5px] sm:px-[100px]  w-full 2xl:max-w-[1280px] h-[832px] bg-cover  ">
      {/* <div className=" flex flex-col items-center justify-start overflow-scroll h-[832px] text-[100px] bg-komunitySection bg-no-repeat bg-cover px-[5px] sm:px-[100px]  w-full 2xl:max-w-[1280px]"> */}
      <div className="  w-full h-full  flex justify-between items-start">
        <div className="flex justify-center items-center">
          <div className="gap-[52px] flex flex-col ">
            <div className="flex flex-col w-[472px] gap-[16px]">
              <h1 className=" text-whiteSmoke500 text-[40px] font-bold leading-[60px]">
                Komunitas Konten Creator
              </h1>
              <p className="text-[18px] font-light leading-[28px] text-whiteSmoke600">
                Ayo bergabung dengan para penggerak industri kreatif untuk
                bertukar ide, mendapatkan inspirasi, dan memperluas jaringanmu.
              </p>
            </div>

            <button className="w-[260px] h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
              <p className="text-black500 text-[16px] font-medium leading-[24px]">
                Selengkapnya
              </p>
            </button>
          </div>
        </div>
        <div></div>
        <img
          src={komunitasPic.rectangle74}
          alt="komunitas"
          className="w-[556px] h-[672px] "
        />
      </div>
      <div className="  w-full h-full  flex justify-between items-start">
        <div className="flex justify-center items-center">
          <div className="gap-[52px] flex flex-col ">
            <div className="flex flex-col w-[472px] gap-[16px]">
              <h1 className=" text-whiteSmoke500 text-[40px] font-bold leading-[60px]">
                Komunitas Konten Creator
              </h1>
              <p className="text-[18px] font-light leading-[28px] text-whiteSmoke600">
                Ayo bergabung dengan para penggerak industri kreatif untuk
                bertukar ide, mendapatkan inspirasi, dan memperluas jaringanmu.
              </p>
            </div>

            <button className="w-[260px] h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
              <p className="text-black500 text-[16px] font-medium leading-[24px]">
                Selengkapnya
              </p>
            </button>
          </div>
        </div>
        <div></div>
        <img
          src={komunitasPic.rectangle74}
          alt="komunitas"
          className="w-[556px] h-[672px] "
        />
      </div>
    </div>
  );
}

export default ComunitySection;
