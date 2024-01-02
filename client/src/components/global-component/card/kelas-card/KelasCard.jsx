import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../../constants";
import { Progress } from "@chakra-ui/react";

export default function KelasCard() {
  return (
    <div className="flex w-[761px] h-[228px] flex-shrink-0 pt-[17px] border rounded-[10px] border-[rgba(102,102,102,0.5)]">
      <img
        src={images.kelasFoto}
        alt="Career Momen 1"
        className=" w-[150px] h-[150px] ml-[11px] mr-[28px]"
      />
      <div className="">
        <h1 className=" font-medium text-[24px] leading-[28px] text-black500 w-[234px] h-[56px] flex-shrink-0 mb-[43px]">
          Langkah Sukses Jadi Youngtrepeneur
        </h1>
        <div className="flex items-center justify-center">
          <Progress
            colorScheme="blue"
            width="372px"
            height="14px"
            borderRadius="50px"
            value={39}
          />
          <p className="ml-[8px]">39%</p>
        </div>
        <p className="text-[18px] font-normal leading-[28px] text-black">
          20 / 50 Submateri
        </p>
      </div>
      <div className="flex items-center justify-center w-fit h-fit p-[10px] ml-[23px] bg-whiteSmoke500 border border-[#66666680] rounded-[10px]">
        <Link
          to="/lihatkelas"
          className="font-medium text-[18px] leading-[28px] font-[#0F1011]"
        >
          Lihat Kelas
        </Link>
      </div>
    </div>
  );
}
