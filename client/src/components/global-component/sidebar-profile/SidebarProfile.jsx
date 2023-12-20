import React from "react";
import { NavLink } from "react-router-dom";
import { icon } from "../../../constants";

export default function SidebarProfile() {
  return (
    <div className="flex flex-row justify-start lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:h-[1000px] gap-[12px]">
      {/* Left Side - Menu Box */}
      <div
        className="flex flex-col items-center w-[300px] h-full bg-white-200 border border-grey ml-10px"
        style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}
      >
        <img
          src={icon.iconEdit}
          alt="Career Momen 1"
          className="object-cover w-[40px] h-[40px] ml-[180px] mt-[60px] "
          style={{ borderRadius: "10px" }}
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
          <div
            className="flex flex-row items-center w-[200px] h-[40px] bg-white-200 border border-grey "
            style={{
              boxShadow: "3px 3px 7px rgba(128, 128, 128, 0.3)",
              borderRadius: "10px",
            }}
          >
            <NavLink
              to="/dashboard"
              className="text-gray-800 hover:text-blue-500 ml-2"
            >
              <a href="" className="logo">
                <img
                  src={icon.iconHome}
                  alt="Career Momen 1"
                  className="object-cover w-[15px] h-[14px] ml-3"
                />
              </a>
              Dashboard
            </NavLink>
          </div>

          {/* <nav>
          {[
            ['Semua Kelas', '/profil/kelas-saya/semua-kelas'],
            ['Belum Dimulai', '/profil/kelas-saya/belum-dimulai'],
            ['Sedang Dipelajari', '/profil/kelas-saya/sedang-dipelajari'],
            ['Selesai', '/profil/kelas-saya/selesai'],
          ].map(([title, url]) => (
            <NavLink to={url} style={NavlinkStyles} className={({ isActive }) => (isActive ? activeLink : unactiveLink)}>{title}
              <hr className="w-[39px] h-[5px] bg-black500 border-3 rounded-[50px]"></hr>
            </NavLink>
          ))}
          </nav> */}

          <NavLink
            to="/kelas-saya"
            className="text-gray-800 hover:text-blue-500 lg:ml-[37px] mt-[-40px] font-light"
          >
            <img
              src={icon.iconCourse}
              alt="Career Momen 1"
              className="object-cover w-[15px] h-[14px] ml-3"
            />
            Kelas Saya
          </NavLink>
          <img
            src={icon.iconWishlist}
            alt="Career Momen 1"
            className="object-cover w-[15px] h-[14px] ml-3"
          />
          <NavLink
            to="/wishlist"
            className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light"
          >
            Wishlist
          </NavLink>
          <img
            src={icon.iconEvent}
            alt="Career Momen 1"
            className="object-cover w-[15px] h-[14px] ml-3"
          />
          <NavLink
            to="/event"
            className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light"
          >
            Event
          </NavLink>
          <img
            src={icon.iconTransaksi}
            alt="Career Momen 1"
            className="object-cover w-[15px] h-[14px] ml-3"
          />
          <NavLink
            to="/transaksi"
            className="text-gray-800 hover:text-blue-500  lg:ml-[37px] mt-[-40px] font-light"
          >
            Transaksi
          </NavLink>
        </div>
      </div>
    </div>
  );
}
