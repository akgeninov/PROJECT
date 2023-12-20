import React from "react";
import { Link } from "react-router-dom";
import { icon } from "../../../constants";
import { images } from "../../../constants";

function DashboardProfile() {
  return (
    <div className="flex flex-row justify-start lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:h-[1000px] gap-[12px]">
      {/* Left Side - Menu Box */}
      <div className="flex flex-col items-center w-[300px] h-full bg-white-200 border border-grey ml-10px" style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}>
      <img
          src={icon.iconEdit}
          alt="Career Momen 1"
          className="object-cover w-[40px] h-[40px] ml-[180px] mt-[60px] " style={{ borderRadius: "10px" }}
        />
        <img
          src={icon.profile}
          alt="Career Momen 1"
          className="object-cover w-[150px] h-[140px]"
        />
        <h1 className="font-bold mt-3" style={{ fontSize: "25px" }}>
          Anonymous
        </h1>
        <div className="flex flex-col lg:mt-[35px] lg:ml-[50px] font-bold gap-5 p-4">
          <div className="flex flex-row items-center w-[200px] h-[40px] bg-white-200 border border-grey " style={{ boxShadow: "3px 3px 7px rgba(128, 128, 128, 0.3)", borderRadius: "10px" }}>
            <img
              src={icon.iconHome}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
            <Link to="/dashboard" className="text-gray-800 hover:text-blue-500 ml-2">
              Dashboard
            </Link>
          </div>
          <img
              src={icon.iconCourse}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
          <Link to="/kelas-saya" className="text-gray-800 hover:text-blue-500 lg:ml-[37px] mt-[-40px] font-light">
            Kelas Saya
          </Link>
          <img
              src={icon.iconWishlist}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
          <Link to="/wishlist" className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light">
            Wishlist
          </Link>
          <img
              src={icon.iconEvent}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
          <Link to="/event" className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light">
            Event
          </Link>
          <img
              src={icon.iconTransaksi}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
          <Link to="/transaksi" className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light">
            Transaksi
          </Link>
        </div>
      </div>

      {/* Right Side - Additional Box */}
      <div className="flex flex-col items-left w-[880px] h-[100px] bg-black text-white border border-grey" style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)", display: "flex", alignItems: "left", borderRadius: "10px" }}>
        <h1 className="ml-5 mt-3 font-bold" style={{ fontSize: "25px" }}>
          Halo, Anonymus!
        </h1>
        <p className="ml-5 mt-2 font-light" style={{ fontSize: "15px" }}>
          Mulai belajar lagi dan selesaikan course kamu.
        </p>
        <h2 className="lg:mt-[70px]" style={{ fontSize: "30px", color: "#666" }} > Lanjutkan progres terakhir kelas</h2> <br />
        <div className="p-20 border border-grey" style={{ borderRadius: "10px", width: "880px", height: "100px"}}>
        <img
                    src={images.kelasFoto}
                    alt="Career Momen 1"
                    className="object-cover w-[100px] h-[100px] ml-[-70px] mt-[-70px]"
                    />
        <div className="mt-[-100px] ml-[50px]">
          <h1 className=" font-bold" style={{ fontSize: "20px", color:"black"}}>Langkah Sukses Jadi Youngtrepeneur</h1>
          </div>
        <div className="p-5 border border-grey mt-[-30px] ml-[650px]" style={{ borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", width: "130px", height: "40px"}}> <Link to="/lihatkelas" className="font bold hover:text-blue-500" style={{ fontSize:"15px", color: "black"}}>Lihat Kelas</Link></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardProfile;
