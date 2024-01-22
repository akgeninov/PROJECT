import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import KelasCard from "../../global-component/card/kelas-card/KelasCard";

function DashboardProfile() {
  const [kelas, setKelas] = useState([]);

  const fetchKelas = async () => {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/progress/last`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setKelas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKelas();
  }, []);
  console.log(kelas.kelas)
  return (
    <div className="justify-center items-center lg:justify-center lg:mt-[10px] sm:mt-[10px] px-0 lg:px-0 sm:w-fit lg:w-[fit] sm:h-full lg:h-full lg:gap-[12px] sm:gap-[12px]">
      <div className="px-[11px] lg:px-[11px] lg:flex-row sm:w-[500px] lg:w-[761px] lg:h-[112px] flex-shrink pt-[17px] border rounded-[10px] border-[rgba(102,102,102,0.2)] mb-[20px] shadow-md shadow-gray-300 w-[761px] h-[112px] bg-black500 text-whiteSmoke500">
        <h1 className="font-bold text-[32px]">Halo, Anonymus!</h1>
        <p className="font-medium text-[18px]">
          Mulai belajar lagi dan selesaikan course kamu.
        </p>
      </div>
      <h2 className="mt-[37px] mb-[17px] text-[32px] font-me text-[#666]">
        Lanjutkan progres terakhir kelas
      </h2>
      
      {kelas.map((kelas,  index) => (
        <KelasCard key={index} kelas={kelas} />
      ))}
    </div>
  );
}

export default DashboardProfile;
