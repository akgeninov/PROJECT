import React from "react";

import "./about-section.css";

function AboutSection() {
  return (
    <div className=" w-full mt-[80px] flex justify-center">
      <div className="bg-aboutSection bg-cover px-[5px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[832px] flex justify-center items-center bg-fixed">
        <div className=" w-full sm:max-w-[1080px] flex flex-col  justify-center items-start gap-[16px] ">
          <p className="max-w-[564px] text-[40px] font-bold leading-[60px] text-whiteSmoke500">
            Sebuah Perjalanan Panjang,dengan Satu Mimpi yang Besar
          </p>
          <p className="max-w-[564px] text-[18px] font-light leading-[28px] text-whiteSmoke600">
            Growlab adalah end to end platform yang membantu bisnis dan UMKM
            mengembangkan usaha dan menaikkan omset melalui program
            pembelajaran, pendampingan, layanan jasa hingga evaluasi
            <br />
            <br />
            Mempertemukan UMKM dan Pendamping UMKM dengan lebih mudah melalui
            komunitas kami yang tersebar di seluruh Indonesia dari berbagai
            jenis industri.
          </p>
        </div>

        {/* <img src={backgroundImages} alt="" /> */}
      </div>
    </div>
  );
}

export default AboutSection;
