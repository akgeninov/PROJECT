import React, { useEffect, useMemo, useRef, useState } from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";
import { useParams } from "react-router";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { detailKelas } from "../../lib/redux-toolkit/feature/detail-kelas/detailKelasSlice";
import CheckoutKelasBisnisMobile from "../../components/detail-kelas-bisnis/main-section/checkout-kelas-bisnis-mobile/CheckoutKelasBisnisMobile";

function DetailKelasBisnis() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isShowCheckOut, setIsShowCheckOut] = useState(false);
  const [star, setStar] = useState(0);
  const timeoutRef = useRef();

  const fetchDetailKelas = useMemo(async () => {
    console.log("jalan");
    console.log({ id });
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`,
        { id: Number(id) }
      );

      setDataDetail(response.data[0]);
      setStar(Number(response.data[0].kelas_bisni.total_nilai));
      dispatch(detailKelas(response.data));
      console.log(Number(response.data[0].kelas_bisni.total_nilai));
    } catch (error) {
      console.log(error);
    }
    console.log("selesai");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Tambahkan event listener pada mount komponen
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener pada unmount komponen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showCheckOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsShowCheckOut(true);
    timeoutRef.current = setTimeout(() => {
      setIsShowCheckOut(false);
    }, 2000);
  };

  useEffect(() => {
    showCheckOut();
  }, [scrollPosition]);
  return (
    <div
      onScroll={() => alert("scroll")}
      className="flex flex-col justify-center items-center shrink-0 "
    >
      <HeroSection dataDetail={dataDetail} star={star} />
      <MainSection dataDetail={dataDetail} />
      <div className="flex xl:hidden absolute bg-transparant pointer-events-none z-[50] top-0  w-full h-full ">
        <CheckoutKelasBisnisMobile
          dataDetail={dataDetail}
          isShowCheckOut={isShowCheckOut}
        />
      </div>
    </div>
  );
}

export default DetailKelasBisnis;
