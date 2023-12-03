import React, { useEffect, useState } from "react";
import { icon } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import BenefitCard from "./benefit-card/BenefitCard";

function BenefitSection() {
  const [dataBenefits] = useState([
    {
      title: "Memperluas koneksi",
      deskripsi:
        "Berinteraksi dengan member lainnya memungkinkan kamu untuk membuka peluang baru",
      pic: icon.koneksi,
    },
    {
      title: "Dapetin insight dari komunitas",
      deskripsi:
        "Kamu bisa banget berdiskusi dan dapetin insight baru di industri kreatif dari member lainnya",
      pic: icon.insight,
    },
    {
      title: "Dukungan & kolaborasi",
      deskripsi:
        "Kamu gak hanya dapetin dukungan, namun juga berkesempatan buat berkolaborasi dengan member lainnya",
      pic: icon.handshake,
    },
    {
      title: "Update event & informasi terkini",
      deskripsi:
        "Kamu bakal dapetin banyak informasi tentang event dan berita terbaru dari member lainnya",
      pic: icon.megaphone,
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" mt-[60px] lg:mt-[160px]  w-fit flex flex-col items-center gap-[52px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-[8px] lg:gap-[16px] items-center "
      >
        <h1 className="text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] max-w-[564px] text-center mb-20">
          Gabung Komunitas ada Banyak Manfaatnya
        </h1>

        <div className="grid grid-cols-4 gap-4 items-center">
            {dataBenefits.map((benefits, index) => (
              <BenefitCard key={index} benefits={benefits} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
