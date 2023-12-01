import React, { useEffect, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import PaginationStandart from "../../global-component/pagination/pagination-standart/PaginationStandart";
import { api } from "../../../api/api";

function MainSection() {
  const [onHover, setOnHover] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [dataArtikel, setDataArtikel] = useState([]);
  const tmpDataKategori = [
    {
      title: "Berita",
    },
    {
      title: "Event",
    },
    {
      title: "Wawasan",
    },
    {
      title: "Tips",
    },
    {
      title: "Komunitas",
    },
  ];

  const tmpDataNews = [
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
    {
      title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
      DATE: "November 2023",
      deskripsi:
        "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
      pic: newsPic.rectangleNews1,
    },
  ];

  const fetchArtikel = async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/all`
      );

      setDataArtikel(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataArtikel.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataArtikel.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataArtikel.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-[160px] max-w-[1080px] flex flex-col  justify-center items-center">
      <nav className="hidden sm:flex w-full justify-start items-center ">
        <ul className="flex gap-[16px]">
          <li className="flex justify-center items-center">
            <button className="px-[48px] py-[16px] rounded-[10px] border-[1px] border-black500 ">
              <p className="text-[16px] font-medium leading-[24px]">Semua</p>
            </button>
          </li>
          {tmpDataKategori?.map((el, index) => (
            <li key={index} className="flex justify-center items-center">
              <button className="px-[48px] py-[16px] rounded-[10px] border-[1px] border-black500 ">
                <p className="text-[16px] font-medium leading-[24px]">
                  {el.title}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="xl:h-[1636px] flex justify-center items-start">
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[24px]  mt-[52px] my-[52px] ">
          {currentItems?.map((el, index) => (
            <NewsCard
              onHover={onHover}
              setOnHover={setOnHover}
              index={index}
              news={el}
              path={"artikel"}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1080px] flex justify-center items-center">
        <PaginationStandart
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          marginBot={"mb-[160px]"}
        />
      </div>
    </div>
  );
}

export default MainSection;
