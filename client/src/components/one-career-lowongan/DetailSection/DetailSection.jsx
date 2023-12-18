import React from "react";
import { images } from "../../../constants";


function DetailSection(props) {
  return (
    <div className="m-20 p-10 grid grid-cols-3 gap-20 font-heebo text-[#3F4041]">
      <div className="col-span-2">
        <div className="grid grid-cols-1 divide-y lg:text-[18px]">
          <div>
            <h1 className="lg:text-[24px] font-bold text-black">Deskripsi Pekerjaan </h1> <br />
            {props.lowongan.deskripsi_lowongan_pekerjaan}
          </div>
          <div>
            <h1 className="lg:text-[24px] font-bold mt-20 text-black">Persyaratan  </h1> <br />
            {props.lowongan.persyaratan_lowongan_pekerjaan}
          </div>
        </div>
      </div>
      <div className="col-span-1 ml-10">
        <div
            className="p-5 rounded-lg border-none w-full h-[230px] text-[16px] max-w-[350px]"
            style={{
            boxShadow: "2px 2px 12px 0px #0101011A",
            }}
        >
            <button className="py-3 px-5 rounded-md bg-black text-white w-full">
            Lamar sekarang
            </button>
            <hr className="border-t border-gray-300 my-5" />
            <h1 className="font-semibold">Bagikan Lowongan </h1>
            <div className="flex justify-between items-center pt-2 gap-2">
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.copy_link}
                    alt="Career Momen 2"
                    className=" w-[55px] h-[55px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Linkedin}
                    alt="Career Momen 2"
                    className=" w-[55px] h-[55px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Whatsapp}
                    alt="Career Momen 2"
                    className=" w-[55px] h-[55px]"
                    />
                </button>
                <button className="rounded-md flex items-center justify-center w-full">
                    <img
                    src={images.Telegram}
                    alt="Career Momen 2"
                    className=" w-[55px] h-[55px]"
                    />
                </button>
            </div>
        </div>
        </div>

    </div>
  );
}

export default DetailSection;
