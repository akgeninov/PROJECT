import React, { useMemo } from "react";
import { icon, kelasBisnisPic } from "../../../constants";
import NavigationDetailKelasBisnis from "./navigation-detail-kelas-bisnis/NavigationDetailKelasBisnis";
import { useParams } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import ButtonWhiteSmoke500 from "../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import { api } from "../../../api/api";

function HeroSection() {
  const { id } = useParams();
  const fetchDetailKelas = useMemo(async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`,
        {
          id: Number(id),
        }
      );
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    // console.log({ id });
  }, []);

  const { title } = useParams();
  return (
    <div className="relative  w-full   2xl:max-w-[1280px] h-full  flex flex-col md:flex-row items-center  md:items-start justify-start md:justify-center overflow-hidden">
      <div className="flex min-w-[1280px] xl:min-w-full  max-h-[556px] md:max-h-[660px]  justify-center items-center">
        <img
          src={kelasBisnisPic.heroKelasBisnis1}
          alt="hero"
          className="w-[1280px] xl:w-full h-[660px]"
        />
      </div>
      <div className="absolute h-[660px] left-0 top-0 bg-black500 opacity-90 w-full  z-10"></div>
      <div className="absolute w-full z-20 px-0  md:px-[100px] flex flex-col items-center md:items-start mt-[24px] ">
        <NavigationDetailKelasBisnis />
        <div className="gap-[24px] flex flex-col items-start mt-[52px]">
          <div className="gap-[16px]  flex flex-col items-start">
            <h1 className="text-[24px] md:text-[48px] text-center md:text-start text-whiteSmoke500 font-bold leading-[36px] md:leading-[72px] w-[358px] md:w-[568px]">
              {title}
            </h1>
            <div className="w-full flex text-whiteSmoke600 justify-start gap-x-[16px]  ">
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
                <img
                  src={icon.signal}
                  alt="bok"
                  className="w-[16px] h-[16px]"
                />
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
          <div className="w-full flex justify-center md:justify-start items-center  gap-[8px]">
            <div className="rating rating-sm gap-[4px] ">
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
              <p className="text-[14px] text-whiteSmoke600 font-light leading-[20px]">
                {5}.0
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start gap-[4px]">
            {/* {el.discount ? ( */}
            <div className="w-full flex text-whiteSmoke600 justify-center md:justify-start gap-[4px]">
              <p className="text-[14px] md:text-[18px] font-light leading-[20px] md:leading-[28px] line-through">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(500000)}
              </p>
              <p className="text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[28px] text-[#BA0000]">
                100%
              </p>
            </div>
            {/* // ) : null} */}
            <p className="text-[22px] md:text-[32px] font-bold leading-[32px] md:leading-[48px] text-whiteSmoke500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(0)}
            </p>
          </div>
        </div>

        <div className="mt-[52px] gap-[16px] hidden md:flex ">
          <button className="w-[56px] h-[56px] flex justify-center items-center border-[1px] border-whiteSmoke500 rounded-[10px]">
            <HiOutlineHeart className="text-[32px] text-whiteSmoke500" />
          </button>
          <ButtonWhiteSmoke500
            TEXT_BUTTON={"Daftar Sekarang"}
            WIDTH={"w-[216px]"}
          />
        </div>
      </div>
      <div className="absolute  z-20 w-[358px] md:w-[432px] h-[188px] md:h-[468px] bottom-[32px] md:bottom-auto md:top-[112px] md:right-[100px]">
        <img
          src={kelasBisnisPic.heroKelasBisnisSmall1}
          alt="hero small"
          className="hidden xl:flex"
        />
        <img
          src={kelasBisnisPic.heroKelasBisnis1}
          alt="hero"
          className="rounded-[10px] flex md:hidden "
        />
      </div>
    </div>
  );
}

export default HeroSection;
