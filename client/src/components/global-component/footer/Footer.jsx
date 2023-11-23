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
    <div className="w-full h-[588px] bg-black500">
      <div className="flex flex-col items-center mt-[80px]  w-full 2xl:max-w-[1280px] px-[10px] sm:px-[100px] gap-[52px]">
        <div className="w-full flex justify-between items-center">
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
          <div className="w-[619px] h-[328px] flex gap-[100px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[20px] font-bold leading-[28px] text-whiteSmoke500">
                Layanan
              </h1>
              <div className="flex flex-col items-start">
                {dataLayanan.map((ROUTE) => (
                  <button className="py-[12px] flex justify-center items-center">
                    <p className="shrink-0 text-[19px] font-normal leading-[28px] text-whiteSmoke600">
                      {ROUTE.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            <div className="w-[304px] flex flex-col items-start justify-start gap-[52px]">
              <div className="flex flex-col gap-[24px] items-start">
                <h1 className="text-[20px] font-bold leading-[28px] text-whiteSmoke500">
                  Hubungi Growlab
                </h1>
                <div className="flex justify-start items-center gap-[8px]">
                  <img
                    src={icon.mail}
                    alt="mail"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[19px] font-normal leading-[28px] text-whiteSmoke600">
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
        <div className="flex justify-center items-center w-full 2xl:max-w-[1280px] py-[24px] sm:px-[100px] border-t-[1px] border-whiteSmoke700">
          <img
            src={icon.copyright}
            alt="copyright"
            className="w-[16px] h-[16px]"
          />
          <h1 className="text-[16px] font-medium leading-[24px] text-whiteSmoke600">
            2023 Growlab | PT. Digital Bisnis Kreatif. All right reserved
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
