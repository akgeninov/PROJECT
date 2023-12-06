import React from "react";
import teamPic from "../../../constants/teamPic";

function HeroSection() {
  return (
    <div
      className="bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[712px] lg:h-[712px] flex flex-col"
      style={{ backgroundImage: `url(${teamPic.heroPic})` }}
    >
      <div className="bg-[rgba(8,34,52,0.9)] h-[712px] w-[525px] flex items-center justify-center min-h-screen">
        <div className="h-[528px] w-[477px] flex flex-col gap-[16px]">
          <p className="text-[24px] lg:text-[48px] font-bold font-[Heebo] leading-[36px] lg:leading-[72px] max-w-[431px] text-whiteSmoke500">
            Sebuah perjalanan panjang, dengan satu mimpi yang besar
          </p>
          <p className="text-[18px] lg:text-[18px] font-light font-[Heebo] leading-[28px] text-whiteSmoke500"> 
            Growlab adalah end to end platform yang membantu bisnis dan UMKM
            mengembangkan usaha dan menaikkan omset melalui program
            pembelajaran, pendampingan, layanan jasa hingga evaluasi
          </p>
          <p className="text-[18px] lg:text-[18px] font-light font-[Heebo] leading-[28px] text-whiteSmoke500">
            Mempertemukan UMKM dan Pendamping UMKM dengan lebih mudah melalui
            komunitas kami yang tersebar di seluruh Indonesia dari berbagai
            jenis industri.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
