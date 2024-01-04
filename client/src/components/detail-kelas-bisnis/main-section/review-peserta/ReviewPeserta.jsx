import React from "react";
import dataReviewer from "./constant/data";

function ReviewPeserta() {
  return (
    <div className="gap-[20px] md:gap-[24px] flex flex-col">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Pendapat Mereka Tentang Kelas ini
      </h1>
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-[20px]">
        {dataReviewer.map((el, index) => (
          <div
            key={index}
            className="p-[24px] w-full md:w-[336px] h-[236px] md:h-[308px] flex flex-col rounded-[10px] bg-whiteSmoke500 shadow-customSm"
          >
            <div className="gap-[12px] flex w-full">
              <div className="w-[52px] h-[52px]">
                <img src={el.profile} alt="profile" />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-[18px] font-bold leading-[28px]">
                  {el.nama}
                </h1>
                <h2 className="text-[14px] font-medium leading-[20px]">
                  {el.perusahaan}
                </h2>
              </div>
            </div>
            <div className="relative w-full flex flex-col  items-start">
              <p className="absolute  text-[32px] lg:text-[48px] font-bold opacity-[0.25] text-black500">
                "
              </p>
              <p className="text-[14px] md:text-[16px] mt-[32px] md:mt-[44px] w-full font-light leading-[20px] md:leading-[24px] line-clamp-7">
                {el.descripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPeserta;
