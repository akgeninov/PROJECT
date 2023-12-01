import React, { useEffect, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
function NewsSection() {
  const [dataNesws, setDataNews] = useState([
    {
      judul: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      tanggal: new Date("11/2/2002"),
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      images: "rectangle_news_1.png",
    },
    {
      judul: "12 Tren Pemasaran Paling Efektif di 2023",
      tanggal: new Date("11/2/2002"),
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      images: "rectangle_news_2.png",
    },
    {
      judul: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
      tanggal: new Date("11/2/2002"),
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      images: "rectangle_news_3.png",
    },
  ]);
  const [onHover, setOnHover] = useState("");
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
          Artikel Menarik Untuk Kembangkan Bisnismu
        </h1>
        <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] max-w-[700px] text-center">
          Temukan wawasan mendalam, strategi terkini, dan tips praktis yang
          dapat langsung diterapkan untuk mengembangkan bisnismu ke level
          berikutnya
        </p>
      </div>
      <div className="w-screen xl:w-fit flex overflow-x-scroll xl:overflow-visible gap-y-[52px] gap-x-[24px]">
        {dataNesws.map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            onHover={onHover}
            setOnHover={setOnHover}
            index={index}
            path={"news"}
          />
        ))}
      </div>
      {/* <button className="flex bg-black500 hover:bg-whiteSmoke800 px-[64px] py-[16px] justify-center items-center rounded-[10px] w-[260px]">
        <p className="shrink-0 text-whiteSmoke500 text-[16px] font-medium leading-[24px]">
          
        </p>
      </button> */}
      <ButtonBlack500 TEXT_BUTTON={"Lihat Semua Artikel"} WIDTH={"w-[260px]"} />
    </div>
  );
}

export default NewsSection;
