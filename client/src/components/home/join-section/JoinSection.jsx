import React from "react";
import { images } from "../../../constants";

function JoinSection() {
  return (
    <div className="relative flex justify-end items-center mt-[160px] bg-red-500 w-full 2xl:max-w-[1280px] h-[484px] ">
      <img
        src={images.ellipse9}
        alt="ellipse"
        className="absolute w-fit left-0 "
      />
      <div className="relative bg-gradient-radial  w-full 2xl:max-w-[1280px] h-[484px]  pt-[80px]">
        <div className="pr-[100px] flex flex-col  items-end ">
          <div className="space-y-[52px]">
            <div className="flex flex-col items-start gap-[16px]">
              <h1 className="text-[48px] font-bold leading-[72px] max-w-[632px] text-whiteSmoke500">
                Tertarik untuk bergabung bersama kami?
              </h1>
              <p className="text-[18px] font-light leading-[28px] text-whiteSmoke600 w-[640px]">
                Jangan lewatkan kesempatan untuk meningkatkan potensi bisnis
                kamu dan memperoleh peningkatan pendapatan
              </p>
            </div>
            <div className="flex w-full items-start gap-[24px] ">
              <button className="px-[64px] py-[16px] w-[200px] flex justify-center items-center rounded-[10px] border-[1px] border-whiteSmoke500">
                <p className="shrink-0 text-[16px] font-medium leading-[24px] text-whiteSmoke500">
                  Hubungi Kami
                </p>
              </button>
              <button className="px-[64px] py-[16px] w-[232px] flex justify-center items-center rounded-[10px] bg-whiteSmoke500 border-[1px] ">
                <p className="shrink-0 text-[16px] font-medium leading-[24px] text-black500">
                  Gabung Sekarang
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinSection;
