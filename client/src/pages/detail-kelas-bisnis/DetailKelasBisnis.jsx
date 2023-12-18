import React, { useEffect, useMemo, useState } from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";
import { useParams } from "react-router";
import { api } from "../../api/api";

function DetailKelasBisnis() {
  const { id = Number(id) } = useParams();
  const [dataDetail, setDataDetail] = useState([]);

  const fetchDetailKelas = useMemo(async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`,
        { id }
      );
      setDataDetail(response.data[0]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection dataDetail={dataDetail} />
      <MainSection />
    </div>
  );
}

export default DetailKelasBisnis;
