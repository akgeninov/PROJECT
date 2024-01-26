import React from "react";
import DescriptionKelasBisnis from "./description-kelas-bisnis/DescriptionKelasBisnis";
import CheckoutKelasBisnis from "./checkout-kelas-bisnis/CheckoutKelasBisnis";
import BenefitKelasBisnis from "./benefit-kelas-bisnis/BenefitKelasBisnis";
import ProfilePengajar from "./profile-pengajar/ProfilePengajar";
import ListMateriKelasBisnis from "./list-materi-kelas-bisnis/ListMateriKelasBisnis";
import ReviewPeserta from "./review-peserta/ReviewPeserta";

function MainSection({ dataDetail, addWishlist,  status }) {
  return (
    <div className="mt-[160px] mb-[60px] md:mb-[160px] w-full px-[5px] md:px-[100px] 2xl:px-0 gap-[52px]  2xl:max-w-[1080px] h-full  flex justify-between items-start  ">
      <div className="flex flex-col items-center  md:items-start gap-[48px] md:gap-[80px] ">
        <DescriptionKelasBisnis dataDetail={dataDetail} />
        <BenefitKelasBisnis dataDetail={dataDetail} />
        <ProfilePengajar dataDetail={dataDetail} />
        <ListMateriKelasBisnis dataDetail={dataDetail} />
        <ReviewPeserta dataDetail={dataDetail} />
      </div>
      <div className="hidden xl:flex sticky top-[20px] w-fit">
        <CheckoutKelasBisnis
          dataDetail={dataDetail}
          addWishlist={addWishlist}
          // checkStatusWishlist={checkStatusWishlist}
          status={status}
        />
      </div>
    </div>
  );
}

export default MainSection;
