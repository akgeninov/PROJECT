import React, { useEffect, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { dataNews } from "../../../constants/data";
import { api } from "../../../api/api";

function ArticleSection() {
  const [articles, setArticles] = useState([]);

  const fetchArtikel = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/menarik`,
        {
          kategori: "semua",
          limit: 3,
        }
      );
      setArticles(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtikel();
    // console.log(articles);
  },[]);
  // useEffect(() => {
  //   console.log(articles);
  // },[articles]);

  // const [dataNesws, setDataNews] = useState([
  //   {
  //     title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews1,
  //   },
  //   {
  //     title: "12 Tren Pemasaran Paling Efektif di 2023",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews2,
  //   },
  //   {
  //     title: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
  //     DATE: "November 2023",
  //     deskripsi:
  //       "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
  //     pic: newsPic.rectangleNews3,
  //   },
  // ]);

  const [onHover, setOnHover] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mb-20 mt-[60px] lg:mt-[160px]  w-fit flex flex-col items-center gap-[52px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-[8px] lg:gap-[16px]"
      >
        <h1 className="text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] max-w-[700px] text-center">
          Temukan Artikel Menarik dari Komunitas
        </h1>
        {/* <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] max-w-[700px] text-center">
          Temukan wawasan mendalam, strategi terkini, dan tips praktis yang
          dapat langsung diterapkan untuk mengembangkan bisnismu ke level
          berikutnya
        </p> */}
      </div>
      <div className="w-screen xl:w-fit flex overflow-x-scroll xl:overflow-visible gap-y-[52px] gap-x-[24px]">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            news={article}
            onHover={onHover}
            setOnHover={setOnHover}
            index={index}
            path={"artikel"}
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

export default ArticleSection;
