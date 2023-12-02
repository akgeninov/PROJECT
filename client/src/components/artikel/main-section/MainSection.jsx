import React, { useEffect, useRef, useState } from "react";
import { newsPic } from "../../../constants";
import NewsCard from "../../global-component/card/news-card/NewsCard";
import PaginationStandart from "../../global-component/pagination/pagination-standart/PaginationStandart";
import { api } from "../../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";

function MainSection() {
  const navigate = useNavigate();
  const { kategori } = useParams();

  const [onHover, setOnHover] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [dataArtikel, setDataArtikel] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [onKategori, setOnKategori] = useState("Semua");
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

  const page1 = useRef();

  const fetchArtikel = async () => {
    setOnKategori("Semua");
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/all`
      );
      console.log(response.data.data);

      setDataArtikel(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchArtikelByKategori = async () => {
    try {
      setOnKategori(kategori);
      setCurrentPage(0);
      setItemOffset(0);
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/artikel/kategori`,
        {
          kategori,
        }
      );
      setDataArtikel(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (kategori && kategori.length > 0) fetchArtikelByKategori();
    else fetchArtikel();
  }, [kategori]);

  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataArtikel.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataArtikel.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataArtikel.length;
    console.log(event);
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };

  return (
    <div className="mt-[160px] max-w-[1080px] flex flex-col  justify-center items-center ">
      <nav className="flex w-screen md:w-full justify-start items-center overflow-scroll md:overflow-visible px-[5px] md:px-0">
        <ul className="flex gap-[16px]">
          <li className="flex justify-center items-center">
            <Link
              to={"/artikel"}
              className={`${
                onKategori === "Semua"
                  ? "bg-black500 text-whiteSmoke500 border-black500"
                  : "bg-whiteSmoke500 text-black500 border-black100"
              } px-[24px] xl:px-[48px] py-[8px] xl:py-[16px] rounded-[10px] border-[1px]   `}
            >
              <p className="text-[16px] font-medium leading-[24px]">Semua</p>
            </Link>
          </li>
          {tmpDataKategori?.map((el, index) => (
            <li key={index} className="flex justify-center items-center">
              <Link
                to={`/artikel/${el.title}`}
                className={`${
                  onKategori === el.title
                    ? "bg-black500 text-whiteSmoke500 border-black500"
                    : "bg-whiteSmoke500 text-black500 border-black100"
                } px-[24px] xl:px-[48px] py-[8px] xl:py-[16px] rounded-[10px] border-[1px]   `}
              >
                <p className="text-[16px] font-medium leading-[24px]">
                  {el.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="xl:h-[1636px] flex justify-center items-start mt-[52px] my-[52px] ">
        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[24px]  ">
          {currentItems?.map((el, index) => (
            <NewsCard
              key={index}
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
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default MainSection;
