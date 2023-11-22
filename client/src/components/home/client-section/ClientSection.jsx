import React, { useEffect } from "react";
import ClientCarousel from "./clientCarousel/ClientCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

function ClientSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-[80px] gap-[52px] flex flex-col items-center">
      <p
        className="w-[488px] text-[24px] font-medium leading-[36px] text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Kami dipercaya oleh{" "}
        <span className="font-bold text-indigoDye500"> 400+</span> UMKM dalam
        mencapai kesuksan mereka
      </p>
      <div className="max-w-screen overflow-hidden">
        <ClientCarousel />
      </div>
    </div>
  );
}

export default ClientSection;
