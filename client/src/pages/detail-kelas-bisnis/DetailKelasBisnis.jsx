import React, { useEffect, useMemo, useState } from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";
import { useParams } from "react-router";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { detailKelas } from "../../lib/redux-toolkit/feature/detail-kelas/detailKelasSlice";

function DetailKelasBisnis() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const [star, setStar] = useState(0);
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
  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection dataDetail={dataDetail} star={star} />
      <MainSection dataDetail={dataDetail} />
    </div>
  );
}

export default DetailKelasBisnis;
