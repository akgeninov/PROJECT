import React, { useEffect, useState } from "react";
import { data, images } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./service-card/ServiceCard";

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
            <ServiceCard
              service={service}
              onHover={onHover}
              setOnHover={setOnHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
