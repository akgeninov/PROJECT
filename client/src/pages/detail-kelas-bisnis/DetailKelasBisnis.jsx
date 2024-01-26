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

  const [wishlist, setWishlist] = useState([]);
  const [check, setCheck] = useState([]);
  const [status, setStatus] = useState();

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

  const token = JSON.parse(localStorage.getItem("auth"));
  const addWishlist = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/changeWishlistBool`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setWishlist(response.data.data);
      setStatus(response.data.data.isRemove);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const checkStatusWishlist = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/wishlist-status`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCheck(response.data.data);
      setStatus(response.data.data.isRemove);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkStatusWishlist();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center shrink-0 ">
      <HeroSection
        dataDetail={dataDetail}
        star={star}
        addWishlist={addWishlist}
        checkStatusWishlist={checkStatusWishlist}
        status={status}
      />
      <MainSection
        dataDetail={dataDetail}
        addWishlist={addWishlist}
        checkStatusWishlist={checkStatusWishlist}
        status={status}
      />
    </div>
  );
}

export default DetailKelasBisnis;
