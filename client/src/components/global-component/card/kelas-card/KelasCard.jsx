import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
import { images } from "../../../../constants";


export default function KelasCard(kelas) {
  return (
    <div className="flex w-[761px] h-[228px] flex-shrink-0 pt-[17px] border rounded-[10px] border-[rgba(102,102,102,0.2)] mb-[20px] shadow-md shadow-gray-300">
      <div className=" w-[150px] h-[150px] ml-[11px] mr-[28px]">
        <img
          src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${kelas.kelas.image}`|| images.Linkedin}
          alt={kelas.kelas.nama || "No Data"}
          className="w-full h-full object-cover rounded-[10px]"
          loading="lazy"
        />
      </div>
      <div className="">
        <h1 className=" font-medium text-[24px] leading-[28px] text-black500 w-[234px] h-[56px] flex-shrink-0 mb-[43px]">
          {kelas.kelas.nama || "No Data"}
        </h1>
        <div className="flex items-center justify-center">
          <Progress
            colorScheme="blue"
            width="372px"
            height="14px"
            borderRadius="50px"
            value={kelas.kelas.persentase}
          />
          <p className="ml-[8px]">{kelas.kelas.persentase}%</p>
        </div>
        <p className="text-[18px] font-normal leading-[28px] text-black">
          {kelas.kelas.kelas_regists[0].progress} / {kelas.kelas.total_materi || "No Data"} Submateri
        </p>
      </div>
      <div className="flex items-center justify-center w-fit h-fit p-[10px] ml-[23px] bg-whiteSmoke500 border border-[#66666680] rounded-[10px]">
        <Link
          to={`/kelas-bisnis/${kelas.kelas.id}`}
          className="font-medium text-[18px] leading-[28px] font-[#0F1011]"
        >
          Lihat Kelas
        </Link>
      </div>
    </div>
  );
}
