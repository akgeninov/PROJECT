import React from "react";
import { useParams } from "react-router-dom";
import { icon } from "../../../../constants";

function NavigationDetailKelasBisnis({ dataDetail }) {
  // const { title } = useParams();
  console.log({ dataDetail });

  return (
    <div className="flex  px-[8px] xl:px-0 justify-start  items-center ">
      <nav className="gap-[8px]   flex justify-start items-center list-none">
        <li>
          <p className="text-[14px] text-whiteSmoke500 font-[Heebo] font-light leading-[20px] cursor-pointer">
            Kelas Bisnis
          </p>
        </li>
        <li className=" w-[16px] h-[16px] flex justify-center items-center  ">
          <img src={icon.chevronSmallDownDark} alt="icon" />
        </li>
        <li>
          <p className="w-[100px] md:w-full text-[14px] text-whiteSmoke500 font-[Heebo] font-medium leading-[20px] cursor-pointer line-clamp-1">
            {dataDetail?.kelas_bisni.nama || "no data"}
          </p>
        </li>
      </nav>
    </div>
  );
}

export default NavigationDetailKelasBisnis;
