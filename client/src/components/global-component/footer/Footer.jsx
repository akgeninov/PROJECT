import React, { useState } from "react";
import { icon, logo } from "../../../constants";

function Footer() {
  const [dataLayanan, setDataLayanan] = useState([
    {
      title: "Online Mentoring",
    },
    {
      title: "Konsultasi Bisnis",
    },
    {
      title: "Buat Website & Aplikasi",
    },
    {
      title: "Social Media Management",
    },
    {
      title: "Desain Logo Brand",
    },
    {
      title: "Live Streaming & Content",
    },
  ]);

  const [iconData, setIconData] = useState([
    {
      icon: icon.facebook,
    },
    {
      icon: icon.instagram,
    },
    {
      icon: icon.linkedin,
    },
    {
      icon: icon.tiktok,
    },
    {
      icon: icon.youtube,
    },
  ]);

  return (
    <div className=" z-50 w-full h-full lg:h-[588px] bg-black500 px-[16px] sm:px-[100px]">
      <div className="flex flex-col items-center mt-[80px]  w-full 2xl:max-w-[1280px]  gap-[52px]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-start gap-[24px]">
            <img
              src={logo.growlabWhite}
              alt="logo"
              className="w-[156px] h-[120px] "
            />
            <p className="text-[20px] font-normal leading-[28px] w-[309px] text-whiteSmoke600">
              Ruko Borobudur, Jalan Borobudur 1A - 15, Mojolangu, Lowokwaru,
              Malang, Jawa Timur 65142.
            </p>
          </div>
          <div className="mt-[32px] lg:mt-0 lg:w-[619px] lg:h-[328px] flex flex-col lg:flex-row gap-[32px] lg:gap-[100px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[18px] lg:text-[20px] font-bold leading-[28px] text-whiteSmoke500">
                Layanan
              </h1>
              <div className="flex flex-col items-start">
                {dataLayanan.map((ROUTE) => (
                  <button className="py-[8px] lg:py-[12px] flex justify-center items-center">
                    <p className="shrink-0 text-[14px] lg:text-[19px] font-normal leading-[20px] lg:leading-[28px] text-whiteSmoke600">
                      {ROUTE.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-[304px] flex flex-col items-start justify-start gap-[52px]">
              <div className="flex flex-col gap-[16px] lg:gap-[24px] items-start">
                <h1 className="text-[16px] lg:text-[20px] font-bold leading-[28px] text-whiteSmoke500">
                  Hubungi Growlab
                </h1>
                <div className="flex justify-start items-center gap-[8px]">
                  <img
                    src={icon.mail}
                    alt="mail"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[14px] lg:text-[19px] font-normal leading-[28px] text-whiteSmoke600">
                    cs@youngtrepreneur.id
                  </p>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                  <img
                    src={icon.whatsapp}
                    alt="whatsapp"
                    className="w-[20] h-[20]"
                  />
                  <p className="text-[19px] font-normal leading-[28px] text-whiteSmoke600">
                    0812-1234-1234
                  </p>
                </div>
              </div>
              <div className="w-[304px] flex flex-col items-start gap-[24px]">
                <h1 className="text-[20px] font-bold leading-[28px] text-whiteSmoke500">
                  Ikuti Aktivitas Kami
                </h1>
                <div className="flex gap-[24px] items-center">
                  {iconData.map((el, index) => (
                    <img
                      src={el.icon}
                      alt="icon"
                      key={index}
                      className="w-[40px] h-[40px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-start justify-start lg:justify-center lg:items-center max-w-[358px] lg:max-w-none  lg:w-full 2xl:max-w-[1280px] py-[24px] lg:px-[100px] border-t-[1px] border-whiteSmoke700">
          <img
            src={icon.copyright}
            alt="copyright"
            className="w-[16px] h-[16px] mt-[1px] lg:mt-0"
          />
          <div className="max-w-[388px] lg:max-w-none ">
            <h1 className="text-[14px] lg:text-[16px] flex flex-col lg:flex-row  font-medium leading-[20px] lg:leading-[24px] text-whiteSmoke600">
              2023 Growlab | PT. Digital Bisnis Kreatif. All right reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
