import React from "react";
import { images } from "../../../constants";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";

function HeroSection() {
  const backgroundStyle = {
    backgroundImage: `url(${images.career_Herosection})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%", // Ensure the background covers the entire width
    height: "100vh", // Set a fixed height or adjust as needed
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-start items-center xl:justify-center shrink-0 mt-[23px] sm:mt-[80px] mb-[60px] lg:mb-[80px]"
      style={backgroundStyle}
    >
      <div className="flex lg:px-0 lg:max-w-[628px] flex-initial flex-col w-full items-start lg:items-start gap-[52px] ">
        <div className="flex flex-col items-start lg:items-start gap-[16px] w-full xl:w-[628px]">
          <h1 className="text-[24px] text-white text-left lg:text-start xl:text-[50px] font-bold uppercase leading-[36px] xl:leading-[64px]">
            wujudkan inovasimu<br/>bersama growlab
          </h1>
          <p className="text-left lg:text-start text-[18px] leading-[28px] font-light max-w-[536px]">
            Mari kembangkan perjalanan karirmu bersama Growlab, karena kami 
            yakin kamu selalu memiliki inovasi yang menarik.
          </p>
        </div>
        <ButtonWhiteSmoke500 WIDTH={"w-[260px]"} TEXT_BUTTON={"Lihat Semua Lowongan"} />
      </div>
    </div>
  );
}

export default HeroSection;
