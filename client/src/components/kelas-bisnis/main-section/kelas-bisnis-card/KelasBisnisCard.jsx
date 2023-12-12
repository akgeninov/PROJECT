import React from "react";
import { icon, kelasBisnisPic } from "../../../../constants";
import { Link } from "react-router-dom";

function KelasBisnisCard({ el, index }) {
  return (
    <>
      <Link
        to={`/layanan/kelas-bisnis/${el.title}`}
        key={index}
        className="w-[358px] md:w-[232px] h-[436px] flex flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm"
      >
        <div className="w-full">
          <img
            src={kelasBisnisPic.pic1}
            alt="main"
            className="hidden md:flex"
          />
          <img
            src={kelasBisnisPic.heroKelasBisnis1}
            alt="main"
            className="flex md:hidden "
          />
        </div>
        <div className="w-[326px] md:w-[200px] flex flex-col items-center gap-[16px]">
          <h1 className=" line-clamp-2 text-[18px] font-bold leading-[28px] mt-[16px]">
            {el.title}
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-fit flex md:grid grid-cols-2 gap-x-[8px] md:gap-x-[50px] gap-y-[8px] ">
              <div className=" w-max flex items-center  gap-1">
                <img
                  src={icon.bookOpenSold}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.tipe}
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  src={icon.signal}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.level}
                </p>
              </div>
              <div className=" w-max flex items-center gap-1 ">
                <img
                  src={icon.userCircle}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[14px] font-light leading-[20px] shrink-0">
                  {el.pendaftar} Pendaftar
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center  gap-[8px]">
            <div className="rating rating-md md:rating-sm gap-[4px] ">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name={`rating-${index + 1}`}
                  className="mask mask-star-2 bg-yellow-400"
                  checked={index + 1 === el.star}
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-1">
              <p className="text-[14px] font-light leading-[20px]">
                {el.star}.0
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-[4px]">
            {el.discount ? (
              <div className="w-full flex justify-start gap-[2px]">
                <p className="text-[14px] font-light leading-[20px] line-through">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(el.price)}
                </p>
                <p className="text-[14px] font-medium leading-[20px] text-[#BA0000]">
                  {el.discount}%
                </p>
              </div>
            ) : null}
            <p className="text-[22px] font-bold leading-[32px] text-indigoDye500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(el.price - (el.price * el.discount) / 100)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default KelasBisnisCard;
