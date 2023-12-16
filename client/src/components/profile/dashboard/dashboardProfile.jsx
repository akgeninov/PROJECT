import React from "react";
import { Link } from "react-router-dom";

function DashboardProfile() {
  return (
    <div className="flex flex-row justify-start lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:h-[650px] gap-[52px]">
      {/* Left Side - Menu Box */}
      <div className="flex flex-col items-center w-[300px] h-full bg-white-200 border border-grey ml-10px" style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}>
        <div className="flex flex-col lg:mt-[170px] font-bold gap-4 p-4">
          <div className="flex flex-col items-center w-[150px] h-[40px] bg-white-200 border border-grey ml-auto" style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
            <Link to="/dashboard" className="text-gray-800 hover:text-blue-500">
              Dashboard
            </Link>
          </div>
          <Link to="/kelas-saya" className="text-gray-800 hover:text-blue-500">
            Kelas Saya
          </Link>
          <Link to="/wishlist" className="text-gray-800 hover:text-blue-500">
            Wishlist
          </Link>
          <Link to="/event" className="text-gray-800 hover:text-blue-500">
            Event
          </Link>
          <Link to="/transaksi" className="text-gray-800 hover:text-blue-500">
            Transaksi
          </Link>
        </div>
      </div>

      {/* Right Side - Additional Box */}
      <div className="flex flex-col items-left w-[840px] h-[100px] bg-black text-white border border-grey ml-5" style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)", display: "flex", alignItems: "left", borderRadius: "10px" }}>
        <h1 className="ml-5 mt-3 font-bold " style={{ fontSize: "25px" }}>Halo, Anonymus!</h1>
        <p className="ml-5 mt-2 font-light " style={{ fontSize: "15px" }}>Mulai belajar lagi dan selesaikan course kamu.</p>
      </div>
    </div>
  );
}

export default DashboardProfile;
