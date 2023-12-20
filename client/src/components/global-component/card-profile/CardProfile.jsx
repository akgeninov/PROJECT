import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../constants";

export default function CardProfile() {
  return (
    <div
      className="flex flex-col items-left w-[880px] h-[100px] bg-black text-white border border-grey"
      style={{
        boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)",
        display: "flex",
        alignItems: "left",
        borderRadius: "10px",
      }}
    >
      <h1 className="ml-5 mt-3 font-bold" style={{ fontSize: "25px" }}>
        Halo, Anonymus!
      </h1>
      <p className="ml-5 mt-2 font-light" style={{ fontSize: "15px" }}>
        Mulai belajar lagi dan selesaikan course kamu.
      </p>
      <h2 className="lg:mt-[70px]" style={{ fontSize: "30px", color: "#666" }}>
        {" "}
        Lanjutkan progres terakhir kelas
      </h2>{" "}
      <br />
      <div
        className="p-20 border border-grey"
        style={{ borderRadius: "10px", width: "880px", height: "100px" }}
      >
        <img
          src={images.kelasFoto}
          alt="Career Momen 1"
          className="object-cover w-[100px] h-[100px] ml-[-70px] mt-[-70px]"
        />
        <div className="mt-[-100px] ml-[50px]">
          <h1
            className=" font-bold"
            style={{ fontSize: "20px", color: "black" }}
          >
            Langkah Sukses Jadi Youngtrepeneur
          </h1>
        </div>
        <div
          className="p-5 border border-grey mt-[-30px] ml-[650px]"
          style={{
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "130px",
            height: "40px",
          }}
        >
          {" "}
          <Link
            to="/lihatkelas"
            className="font bold hover:text-blue-500"
            style={{ fontSize: "15px", color: "black" }}
          >
            Lihat Kelas
          </Link>
        </div>
      </div>
    </div>
  );
}
