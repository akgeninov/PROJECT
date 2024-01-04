import React from "react";
import { dataBenefit } from "./constant/data";

function BenefitKelasBisnis() {
  return (
    <div className="flex flex-col items-start gap-[24px]">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Apa yang Akan Kamu Dapatkan?
      </h1>
      <div className="flex flex-col items-start gap-[24px]">
        {dataBenefit.map((el, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-[24px] p-[24px] rounded-[10px] shadow-customSm"
          >
            <div className="p-[8px] w-[100px] h-[100px] flex justify-center items-center">
              <img src={el.pic} alt="icon" className="" />
            </div>
            <div className="gap-[16px] flex flex-col items-start w-full">
              <h1 className="text-[16px] md:text-[22px] font-bold leading-[24px] md:leading-[32px]">
                {el.title}
              </h1>
              <p className="text-[14px] md:text-[16px] text-black400 font-light leading-[20px] md:leading-[24px]">
                {el.descripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitKelasBisnis;
