import React from "react";
import { images } from "../../../constants";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";

function HeroSection() {
  const backgroundStyle = {
    position: "relative",
    backgroundImage: `url(${images.career_Herosection})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for darkness
  };

  const contentContainerStyle = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    paddingLeft: "40px",
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-start items-center xl:justify-center shrink-0 "
      style={backgroundStyle}
    >
      <div style={overlayStyle}></div>
      <div
        className="flex lg:px-0 lg:max-w-[628px] flex-initial flex-col w-full items-start lg:items-start gap-[52px] "
        style={contentContainerStyle}
      >
        <h1 className="text-[24px] text-white textAlign-left lg:text-start xl:text-[50px] font-bold uppercase leading-[36px] xl:leading-[64px]">
          wujudkan inovasimu<br/>bersama growlab
        </h1>
        <p className="text-left lg:text-start text-[18px] leading-[28px] font-light max-w-[536px] text-white">
          Mari kembangkan perjalanan karirmu bersama Growlab, karena kami 
          yakin kamu selalu memiliki inovasi yang menarik.
        </p>
        <ButtonWhiteSmoke500 WIDTH={"w-[260px]"} TEXT_BUTTON={"Lihat Semua Lowongan"}   />
      </div>
      <div className="w-full mt-[px] lg:mt-[80px] flex justify-center"></div>
    </div>
  );
}

export default HeroSection;
