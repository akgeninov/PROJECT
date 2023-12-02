import React, { useEffect, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";

function BenefitSection() {
  const [dataBenefits, setDataBenefits] = useState([
    {
      title: "Memperluas koneksi",
      deskripsi:
        "Berinteraksi dengan member lainnya memungkinkan kamu untuk membuka peluang baru",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "Dapetin insight dari komunitas",
      deskripsi:
        "Kamu bisa banget berdiskusi dan dapetin insight baru seputar perkembangan bisnis saat ini",
      pic: newsPic.rectangleNews2,
    },
    {
      title: "Dukungan & kolaborasi",
      deskripsi:
        "Kamu gak hanya dapetin dukungan, namun juga berkesempatan buat berkolaborasi dengan member lainnya",
      pic: newsPic.rectangleNews3,
    },
    {
      title: "Update event & informasi terkini",
      deskripsi:
        "Kamu bakal dapetin banyak informasi tentang event dan berita terbaru dari member lainnya",
      pic: newsPic.rectangleNews3,
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
        className="flex flex-col gap-[8px] lg:gap-[16px]"
      >
        <h1 className="text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] max-w-[700px] text-center">
          Gabung Komunitas ada Banyak Manfaatnya
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="border-2 rounded-lg border-slate-600 shadow-2xl max-h-(400px) min-h-(200px)">01</div>

        </div>
      </div>
    </div>
  );
}

export default BenefitSection;


