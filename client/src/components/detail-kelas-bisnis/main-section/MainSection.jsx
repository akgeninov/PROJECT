import React from "react";
import DescriptionKelasBisnis from "./description-kelas-bisnis/DescriptionKelasBisnis";
import CheckoutKelasBisnis from "./checkout-kelas-bisnis/CheckoutKelasBisnis";
import BenefitKelasBisnis from "./benefit-kelas-bisnis/BenefitKelasBisnis";
import ProfilePengajar from "./profile-pengajar/ProfilePengajar";
import ListMateriKelasBisnis from "./list-materi-kelas-bisnis/ListMateriKelasBisnis";
import ReviewPeserta from "./review-peserta/ReviewPeserta";

function MainSection() {
  return (
    <div className="mt-[160px] mb-[60px] md:mb-[160px] w-full px-[5px] md:px-[100px] 2xl:px-0   2xl:max-w-[1080px] h-full  flex justify-center items-start  ">
      <div className="flex flex-col items-center  md:items-start gap-[48px] md:gap-[80px] ">
        <DescriptionKelasBisnis />
        <BenefitKelasBisnis />
        <ProfilePengajar />
        <ListMateriKelasBisnis />
        <ReviewPeserta />
      </div>
      <div className="hidden xl:flex w-full ">
        <CheckoutKelasBisnis />
      </div>
    </div>
  );
}

export default MainSection;
