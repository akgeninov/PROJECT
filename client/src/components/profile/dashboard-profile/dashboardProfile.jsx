import React from "react";
import KelasCard from "../../global-component/card/kelas-card/KelasCard";

function DashboardProfile() {
  return (
    <div className="justify-start lg:mt-[10px] lg:px-0 w-fit lg:w-[fit] h-full lg:h-[1000px] gap-[12px]">
      <div className="p-[28px] flex flex-col items-left justify-center w-[761px] h-[112px] bg-black500 text-whiteSmoke500 border border-grey rounded-[10px] shadow-[1px_1px_3px_rgba(128,128,128,0.3) gap-[4px]">
        <h1 className="font-bold text-[32px]">Halo, Anonymus!</h1>
        <p className="font-medium text-[18px]">
          Mulai belajar lagi dan selesaikan course kamu.
        </p>
      </div>
      <h2 className="mt-[37px] mb-[17px] text-[32px] font-me text-[#666]">
        Lanjutkan progres terakhir kelas
      </h2>
      <KelasCard />
    </div>
  );
}

export default DashboardProfile;
