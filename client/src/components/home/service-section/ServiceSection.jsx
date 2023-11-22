import React, { useEffect, useState } from "react";
import { data, images } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceSection() {
  const [onHover, setOnHover] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col  bg-service-section  bg-contain h-[1448px] items-center relative  w-full overflow-y-scroll xl:overflow-y-visible">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col items-center justify-center  mt-[80px] gap-[16px] w-[564px] mb-[52px]"
      >
        <p className="text-[40px] font-bold  text-center leading-[60px] text-whiteSmoke500">
          Layanan Kami
        </p>
        <p className="text-[20px] font-normal text-center leading-[28px] text-whiteSmoke600">
          Kami memiliki beragam layanan yang tepat untuk membantu mewujudkan
          kesuksesan dalam bisnis kamu
        </p>
      </div>
      <div className="w-fit flex justify-center">
        <div className="w-full xl:w-[1080px]  mb-[100px]  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-y-[52px] gap-x-[24px]">
          {data?.dataService?.map((service) => (
            <div
              onMouseEnter={() => setOnHover(service.title)}
              onMouseLeave={() => setOnHover("")}
              className="relative w-[340px] h-[516px] shrink-0 rounded-[10px] cursor-pointer"
            >
              <div
                className={`${
                  onHover === service.title
                    ? "bg-black bg-opacity-50"
                    : "bg-black bg-opacity-0"
                } absolute top-0 left-0 w-full h-full  z-20`}
              ></div>
              <img src={service.pic} alt="service" className={` relative`} />
              <div className="absolute -translate-y-full w-[340px] h-[136px] rounded-b-[10px] z-30 overflow-hidden">
                <div
                  className={`${
                    onHover === service.title
                      ? "translate-y-0"
                      : "translate-y-[64px]"
                  } absolute   w-full bg-black400 p-[20px]   duration-300 z-40`}
                >
                  <p className="text-[22px] font-medium leading-[32px] mb-[16px] text-whiteSmoke500">
                    {service.title}
                  </p>

                  <p
                    className={`${
                      onHover === service.title ? "opacity-100" : "opacity-0"
                    } text-[16px] font-light leading-[24px] text-whiteSmoke600`}
                  >
                    {service.deskripsi}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
