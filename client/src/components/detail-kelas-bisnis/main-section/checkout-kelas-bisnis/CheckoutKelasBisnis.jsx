import React from "react";
import { useParams } from "react-router-dom";
import { icon } from "../../../../constants";
import { HiOutlineHeart } from "react-icons/hi";
import ButtonBlack500 from "../../../global-component/button/button-black500/ButtonBlack500";

function CheckoutKelasBisnis() {
  const { title } = useParams();
  return (
    <div className="p-[20px] flex flex-col items-start   rounded-[10px] shadow-customSm">
      <h1 className="text-[22px] font-bold leading-[32px] w-[288px]">
        {title}
      </h1>
      <div className=" mt-[16px] flex justify-start items-center ">
        <div className="w-fit grid grid-cols-2 gap-x-[10px] gap-y-[8px] ">
          <div className=" w-max flex items-center  gap-1">
            <img
              src={icon.bookOpenSold}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              Materi Eksklusif
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img src={icon.signal} alt="bok" className="w-[16px] h-[16px]" />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              Pemula
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img
              src={icon.userCircle}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              2124 Pendaftar
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center  mt-[20px] gap-[8px]">
        <div className="rating rating-sm gap-[4px]">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name={`rating-${index + 1}`}
              className="mask mask-star-2 bg-orange-400"
              defaultChecked={index + 1 === 5}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-1">
          <p className="text-[14px] font-light leading-[20px]">5.0</p>
        </div>
      </div>
      <div className="mt-[40px] flex flex-col gap-[12px]">
        <h1 className="text-[16px] font-medium leading-[24px]">Total Harga</h1>
        <div className=" flex flex-col items-start gap-[8px]">
          {/* {el.discount ? ( */}
          <div className="w-full flex justify-start gap-[2px]">
            <p className="text-[14px] font-light leading-[20px] line-through">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(500000)}
            </p>
            <p className="text-[14px] font-medium leading-[20px] text-[#BA0000]">
              100%
            </p>
          </div>
          {/* ) : null} */}
          <p className="text-[24px] font-bold leading-[36px] text-black500">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(500000 - (500000 * 100) / 100)}
          </p>
        </div>
      </div>
      <div className="mt-[40px] gap-[16px] flex ">
        <button className="w-[56px] h-[56px] flex justify-center items-center border-[1px] border-black500 rounded-[10px]">
          <HiOutlineHeart className="text-[32px] text-black500" />
        </button>
        <ButtonBlack500 TEXT_BUTTON={"Daftar Sekarang"} WIDTH={"w-[216px]"} />
      </div>
    </div>
  );
}

export default CheckoutKelasBisnis;
