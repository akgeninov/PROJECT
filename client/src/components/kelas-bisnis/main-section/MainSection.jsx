import React, { useCallback, useEffect, useMemo, useState } from "react";
import { kelasBisnis } from "./constant/data";
import { icon, kelasBisnisPic } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import PaginationDetaile from "../../global-component/pagination/pagination-detaile/PaginationDetaile";
import KelasBisnisCard from "./kelas-bisnis-card/KelasBisnisCard";
import { api } from "../../../api/api";

import FilterDataKelas from "./filter-data-kelas/FilterDataKelas";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { HiFilter } from "react-icons/hi";

function MainSection() {
  const kategori = [
    {
      id: 1,
      kategori: "Entrepreneur",
    },
    { id: 2, kategori: "Sales & Marketing" },
    { id: 3, kategori: "Office Productivity" },
  ];

  const level = [
    {
      id: 1,
      level: "Pemula",
    },
    {
      id: 2,
      level: "Menengah",
    },
    {
      id: 3,
      level: "Lanjutan",
    },
  ];

  const harga = [
    {
      id: 1,
      hargaMax: 0,
      hargaMin: 0,
    },
    {
      id: 2,
      hargaMax: 100000,
      hargaMin: 50000,
    },
    {
      id: 3,
      hargaMax: 250000,
      hargaMin: 100000,
    },
    {
      id: 4,
      hargaMax: 500000,
      hargaMin: 250000,
    },
    {
      id: 5,
      hargaMax: 500000,
      hargaMin: 1000000,
    },
  ];

  // const [kategoriFilter, setKategoriFilter] = useState(
  //   kategori.map((el, index) => ({
  //     id: index,
  //     bool: false,
  //     kategor: el.kategori,
  //   }))
  // );

  const [kategoriFilter, setKategoriFilter] = useState([]);
  const [levelFilter, setLevelFilter] = useState([]);
  const [hargaFilter, setHargaFilter] = useState([]);
  const [dataClass, setDataClass] = useState([]);

  // const [levelFilter, setLevelFilter] = useState(
  //   level.map((el, index) => ({
  //     id: index,
  //     bool: false,
  //     leve: el.level,
  //   }))
  // );
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageCount, setPageCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9;

  const navigate = useNavigate();

  const fetchKategori = useMemo(async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/kategori`
      );
      const dataResponse = response.data.data;
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      const searchParams = new URLSearchParams(url.search);
      const newKategori = dataResponse.map((el) => ({ ...el, bool: false }));

      let kategoriValue = searchParams.get("kategori")?.toString().split(",");
      if (kategoriValue && kategoriValue.length) {
        const oldLevel = newKategori?.map((kategori) => ({
          ...kategori,
          bool: kategoriValue.includes(kategori.nama),
        }));
        setKategoriFilter(oldLevel);
      } else setKategoriFilter(newKategori);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchLevel = useMemo(async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/level`
      );
      const dataResponse = response.data.data;
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      const searchParams = new URLSearchParams(url.search);
      const newLevel = dataResponse.map((el) => ({ ...el, bool: false }));
      console.log({ newLevel });

      let levelValue = searchParams.get("level")?.toString().split(",");
      if (levelValue && levelValue.length) {
        const oldLevel = newLevel?.map((level) => ({
          ...level,
          bool: levelValue.includes(level.nama),
        }));
        setLevelFilter(oldLevel);
      } else setLevelFilter(newLevel);

      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchKelasBisnis = useMemo(async () => {
    const controller = new AbortController();
    try {
      const kategoriId = kategoriFilter
        .filter((el) => el.bool)
        .map((el) => el.id);
      const levelId = levelFilter.filter((el) => el.bool).map((el) => el.id);
      const hargaId = hargaFilter.filter((el) => el.bool).map((el) => el.id);
      const hargaData = harga.filter((el) => el.id === hargaId[0]);
      console.log({ kategoriFilter, levelFilter, hargaFilter });
      console.log({
        kategori: kategoriId,
        level: levelId,
        harga1: hargaData?.hargaMin,
        harga2: hargaData?.hargaMax,
      });

      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`,
        {
          kategori: kategoriId,
          level: levelId,
          harga1: hargaData?.hargaMin,
          harga2: hargaData?.hargaMax,
        }
      );
      setDataClass(response.data.dataKelas);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [kategoriFilter, levelFilter, hargaFilter]);

  const handlePageClick = (event) => {
    setPage(event.selected);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let levelValue = searchParams.get("level")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");
    console.log(url.search);

    navigate(
      `?${new URLSearchParams({
        page: Number(event.selected) + 1,
        kategori: kategoriValue || "",
        level: levelValue || "",
        harga: hargaValue || "",
      })}`
    );

    // if (kategoriValue) {
    //   navigate(
    //     `?${new URLSearchParams({
    //       page: event.selected + 1,
    //       kategori: kategoriValue,
    //     })}`
    //   );
    // } else if (!kategoriValue) {
    //   navigate(
    //     `?${new URLSearchParams({
    //       page: event.selected + 1,
    //     })}`
    //   );
    // }
  };

  const [renderCount, setRenderCount] = useState(0);

  const fetchfilter = useMemo(async () => {
    try {
      console.log(levelFilter);
      // const newLevel = level.map((el) => ({ ...el, bool: false }));
      const newHarga = harga.map((el) => ({ ...el, bool: false }));
      console.log("newLevel");
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      const searchParams = new URLSearchParams(url.search);
      let pageValue = searchParams.get("page");
      let kategoriValue = searchParams.get("kategori")?.toString().split(",");
      let levelValue = searchParams.get("level")?.toString().split(",");
      let hargaValue = searchParams.get("harga")?.toString().split(",");

      console.log({ pageValue, kategoriValue, hargaValue, levelValue });
      if (kategoriValue && levelValue && hargaValue) {
        const oldKategori = kategoriFilter?.map((kategori) => ({
          ...kategori,
          bool: kategoriValue.includes(kategori.nama),
        }));
        const oldLevel = levelFilter?.map((level) => ({
          ...level,
          bool: levelValue.includes(level.nama),
        }));

        const oldHarga = newHarga.map((harga) => ({
          ...harga,
          bool: hargaValue.includes(harga.hargaMax.toString()),
        }));
        console.log({ levelFilter });
        console.log({ oldLevel });
        setRenderCount((prev) => prev + 1);
        setHargaFilter(oldHarga);
        setKategoriFilter(oldKategori);
        setLevelFilter(oldLevel);
      } else if (kategoriValue && !levelValue && !hargaValue) {
        console.log("1");
        const oldKategori = kategoriFilter?.map((kategori) => ({
          ...kategori,
          bool: kategoriValue.includes(kategori.nama),
        }));
        console.log({ oldKategori });
        setKategoriFilter(oldKategori);
      } else if (!kategoriValue && levelValue && !hargaValue) {
        console.log("2");
        const oldLevel = levelFilter?.map((level) => ({
          ...level,
          bool: levelValue.includes(level.nama),
        }));
        setLevelFilter(oldLevel);
      } else if (!kategoriValue && levelValue && hargaValue) {
        console.log("3");
        const oldLevel = levelFilter?.map((level) => ({
          ...level,
          bool: levelValue.includes(level.nama),
        }));
        const oldHarga = newHarga.map((harga) => ({
          ...harga,
          bool: hargaValue.includes(harga.hargaMax.toString()),
        }));

        setHargaFilter(oldHarga);
        setLevelFilter(oldLevel);
      } else if (!kategoriValue && !levelValue && hargaValue) {
        console.log("4");
        const oldHarga = newHarga.map((harga) => ({
          ...harga,
          bool: hargaValue.includes(harga.hargaMax.toString()),
        }));

        setHargaFilter(oldHarga);
      } else {
        const oriKategori = kategoriFilter.map((el) => ({
          ...el,
          bool: false,
        }));
        const oriLevel = levelFilter.map((el) => ({
          ...el,
          bool: false,
        }));
        console.log({ oriKategori });
        console.log(newHarga);
        setHargaFilter(newHarga);
        setKategoriFilter(oriKategori);
        setLevelFilter(oriLevel);
      }
      if (pageValue) {
        setPage(Number(pageValue) - 1);
        setCurrentPage(Number(pageValue) - 1);
      }
    } catch (error) {
      console.log(error);
    }
  }, [window.location.href]);

  console.log("render");

  const fetchPage = useMemo(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    console.log({ pageValue });
    const getPage = 0;
    setCurrentPage(getPage);

    const newOffset = (getPage * itemsPerPage) % dataClass.length;
    console.log({ dataClass: dataClass.length, getPage });
    const endOffset = newOffset + itemsPerPage;
    // setDataClass(dataClass);
    console.log({ dataClass });
    console.log({ dataClass: dataClass.slice(newOffset, endOffset) });
    setCurrentItems(dataClass.slice(newOffset, endOffset));
    setPageCount(Math.ceil(dataClass.length / itemsPerPage));

    if (pageValue) return setPage(Number(pageValue) - 1);
  }, [dataClass]);

  // const handleLevel = (ind) => {
  //   console.log(ind);
  //   const currentUrl = window.location.href;
  //   const url = new URL(currentUrl);
  //   const searchParams = new URLSearchParams(url.search);
  //   let pageValue = searchParams.get("page");
  //   let kategoriValue = searchParams.getAll("kategori");
  //   console.log({ kategoriValue });
  //   const updateLevelFilter = levelFilter.map((item, index) =>
  //     item.id === ind ? { ...item, bool: !item.bool } : item
  //   );
  //   const gotLevelTrue = updateLevelFilter.filter((el) => el.bool === true);
  //   console.log(levelFilter);
  //   if (pageValue && kategoriValue.length > 0) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         page: pageValue,
  //         kategori: kategoriValue,
  //         level: gotLevelTrue.map((el) => el.leve),
  //       })}`
  //     );
  //   } else if (!pageValue && kategoriValue.length > 0) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         kategori: kategoriValue,
  //         level: gotLevelTrue.map((el) => el.leve),
  //       })}`
  //     );
  //   } else if (pageValue && kategoriValue.length < 1) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         page: pageValue,
  //         level: gotLevelTrue.map((el) => el.leve),
  //       })}`
  //     );
  //   } else if (!pageValue && kategoriValue.length < 1) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         level: gotLevelTrue.map((el) => el.leve),
  //       })}`
  //     );
  //   } else {
  //     navigate("/kelas-bisnis");
  //   }

  //   setLevelFilter(updateLevelFilter);
  // };

  // const handleKategori = (ind) => {
  //   const currentUrl = window.location.href;
  //   console.log(ind);
  //   const url = new URL(currentUrl);
  //   const searchParams = new URLSearchParams(url.search);
  //   let pageValue = searchParams.get("page");
  //   let kategoriValue = searchParams.getAll("kategori");
  //   let levelValue = searchParams.getAll("level");

  //   const updatekategoriFilter = kategoriFilter.map((item, index) =>
  //     item.id === ind ? { ...item, bool: !item.bool } : item
  //   );

  //   const gotKategoriTrue = updatekategoriFilter.filter(
  //     (el) => el.bool === true
  //   );
  //   console.log(gotKategoriTrue.map((el) => el.kategor));
  //   console.log({ pageValue, levelValue });
  //   if (pageValue && levelValue.length > 0) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         page: pageValue,
  //         kategori: gotKategoriTrue.map((el) => el.kategor),
  //         level: levelValue,
  //       })}`
  //     );
  //   } else if (!pageValue && levelValue.length > 0) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         kategori: gotKategoriTrue.map((el) => el.kategor),
  //         level: levelValue,
  //       })}`
  //     );
  //   } else if (pageValue && levelValue.length < 1) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         page: pageValue,
  //         kategori: gotKategoriTrue.map((el) => el.kategor),
  //       })}`
  //     );
  //   } else if (!pageValue && levelValue.length < 1) {
  //     navigate(
  //       `?${new URLSearchParams({
  //         kategori: gotKategoriTrue.map((el) => el.kategor),
  //       })}`
  //     );
  //   } else {
  //     navigate("/kelas-bisnis");
  //   }

  //   console.log(updatekategoriFilter);

  //   setKategoriFilter(updatekategoriFilter);
  // };

  // useEffect(() => {
  //   const currentUrl = window.location.href;
  //   const url = new URL(currentUrl);
  //   const searchParams = new URLSearchParams(url.search);
  //   let pageValue = searchParams.get("page");
  //   let kategoriValue = searchParams.getAll("kategori");
  // }, [window.location.href]);

  useEffect(() => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);
    console.log(url);
    const path = url.pathname;

    if (path.includes("/kelas-bisnis")) {
      const searchParams = new URLSearchParams(url.search);
      let pageValue = searchParams.get("page");
      console.log({ pageValue });

      let kategoriValue = searchParams
        .getAll("kategori")
        ?.toString()
        .split(",");
      let levelValue = searchParams.getAll("level")?.toString().split(",");
      let hargaValue = searchParams.getAll("harga")?.toString().split(",");

      // if (!pageValue) pageValue = 1;
      // console.log({ kategoriValue, levelValue, hargaValue });
      const getPage = Number(page);
      setCurrentPage(getPage);
      const newOffset = (getPage * itemsPerPage) % dataClass.length;
      const endOffset = newOffset + itemsPerPage;
      // setDataClass(dataClass);
      // console.log({ dataClass });
      console.log({ current: dataClass.slice(newOffset, endOffset) });
      setCurrentItems(dataClass.slice(newOffset, endOffset));
      setPageCount(Math.ceil(dataClass.length / itemsPerPage));

      // navigate(
      //   `?${new URLSearchParams({
      //     page: Number(page) + 1,
      //     kategori: kategoriValue || "",
      //     level: levelValue || "",
      //     harga: hargaValue || "",
      //   })}`
      // );

      // navigate(
      //   `?${new URLSearchParams({
      //     page: page + 1,
      //     kategori: kategoriValue || "",
      //     level: levelValue || "",
      //     harga: hargaValue || "",
      //   })}`
      // );
    } else {
      console.log("Path tidak sesuai dengan /layanan/kelas-bisnis");
    }
    console.log("jalan");
  }, [page]);

  useEffect(() => {
    console.log({ kategoriFilter });
  }, [kategoriFilter, levelFilter, hargaFilter]);

  // const changePage = useMemo(() => {

  // }, []);

  useEffect(() => {
    console.log((4 + 1) * 2 - 1 === 4.5 * 2);
  }, [renderCount]);

  return (
    <div className="w-full px-[5px] md:px-[100px] 2xl:p-0 2xl:max-w-[1080px] flex  justify-center items-start gap-[52px] mt-[160px]">
      <FilterDataKelas
        setToggleFilter={setToggleFilter}
        toggleFilter={toggleFilter}
        kategori={kategoriFilter}
        setKategori={setKategoriFilter}
        setLevel={setLevelFilter}
        setPage={setPage}
        setHarga={setHargaFilter}
        // handleKategori={handleKategori}
        // handleLevel={handleLevel}
        level={levelFilter}
        harga={hargaFilter}
      />
      {/* <h1>{renderCount}</h1> */}

      <div className="w-full flex flex-col items-center gap-[52px] ">
        <div className="w-full flex flex-col items-center gap-[32px] h-[4200px] lg:h-[2372px]  xl:h-[1472px]">
          <div className="w-full   flex justify-between items-center lg:justify-end">
            <button
              onClick={() => setToggleFilter((prev) => !prev)}
              className="flex md:hidden px-[36px] py-[12px]  justify-center items-center text-whiteSmoke500 bg-black500 rounded-[10px]"
            >
              <HiFilter />
              <p className="text-[16px] leading-[24px] font-medium">Filter</p>
            </button>
            <p>({dataClass.length}) Kelas Ditemukan</p>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  gap-[24px] ">
            {currentItems?.map((el, index) => {
              const dataRating = el.kelas_ratings;
              console.log({ dataRating });
              const getSum = dataRating.reduce(
                (acc, obj) => acc + obj.nilai,
                0
              );
              const getAvarage = Number(getSum / dataRating.length).toFixed(1);
              console.log({ getSum, getAvarage });
              return (
                <KelasBisnisCard
                  el={el}
                  index={index}
                  key={index}
                  star={isNaN(getAvarage) ? Number(0) : getAvarage}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full ">
          <PaginationDetaile
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={currentPage}
            dataFound={kelasBisnis}
            currentItems={currentItems}
            marginBot={"mb-[160px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
