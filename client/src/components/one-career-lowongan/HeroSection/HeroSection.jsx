import React from "react";
import { images } from "../../../constants";

function HeroSection(props) {
  return (
    <div className="flex bg-black500 w-full  2xl:max-w-[1080px] ">
      <div className="relative flex  w-full justify-center md:justify-end items-center">
        <img
          src={images.geometricShapeArtikelDesktop}
          alt=""
          className="hidden md:block"
        />
        <img
          src={images.geometricShapeArtikelMobile}
          alt=""
          className="block md:hidden"
        />

        <div className="flex flex-col absolute w-full justify-center items-center md:left-0 md:w-fit md:ml-[100px] gap-[16px] z-10">
          <h1 className="flex justify-center md:justify-start items-center text-center md:text-start text-[24px] md:text-[48px] font-bold leading-[36px] md:leading-[72px] text-whiteSmoke500 left-[100px] max-w-[256px] md:max-w-[572px] ">
            {props.lowongan.nama_lowongan_pekerjaan}
          </h1>
          <h6>{props.lowongan.departemen.nama_departemen_pekerjaan}</h6>
          <h6>{props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}</h6>
          <h6>{props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}</h6>
          <h6>{props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}</h6>
          <h6>{props.lowongan.batas_lamar}</h6>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
