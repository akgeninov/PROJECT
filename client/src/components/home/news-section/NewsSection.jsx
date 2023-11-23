import React, { useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "./news-card/NewsCard";

function NewsSection() {
  const [dataNesws, setDataNews] = useState([
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "12 Tren Pemasaran Paling Efektif di 2023",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews2,
    },
    {
      title: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews3,
    },
  ]);
  const [onHover, setOnHover] = useState("");

  return (
    <div className="mt-[160px] mb-[160px] w-fit  flex flex-col items-center gap-[52px]">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[40px] font-bold leading-[60px] max-w-[700px] text-center">
          Artikel Menarik Untuk Kembangkan Bisnismu
        </p>
        <p className="text-[18px] font-light leading-[28px] max-w-[700px] text-center">
          Temukan wawasan mendalam, strategi terkini, dan tips praktis yang
          dapat langsung diterapkan untuk mengembangkan bisnismu ke level
          berikutnya
        </p>
      </div>
      <div className="w-fit grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-y-[52px] gap-x-[24px]">
        {dataNesws.map((news, index) => (
          <NewsCard
            news={news}
            onHover={onHover}
            setOnHover={setOnHover}
            index={index}
          />
        ))}
      </div>
      <button className="flex bg-black500 px-[64px] py-[16px] justify-center items-center rounded-[10px] w-[260px]">
        <p className="shrink-0 text-whiteSmoke500 text-[16px] font-medium leading-[24px]">
          Lihat Semua Artikel
        </p>
      </button>
    </div>
  );
}

export default NewsSection;
