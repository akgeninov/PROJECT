import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faHeart,
  faVideo,
  faWallet,
} from "@fortawesome/free-solid-svg-icons"; // Add other icons as needed
import { icon } from "../../../constants";

export default function SidebarProfile() {
  const navigate = useNavigate();
  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#0F1011" : "#666",
      backgroundColor: "#F4F4F4",
      boxShadow: isActive ? "3px 3px 7px rgba(128,128,128,0.3)" : "",
    };
  };

  return (
    <div className="flex flex-row justify-center lg:justify-start max-w-screen-2xl lg:mt-[12px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:max-h-fit gap-[22px] flex-shrink-0 my-[50px]">
      {/* Left Side - Menu Box */}
      <div
        className="hidden lg:flex flex-col items-center w-[395px] h-full bg-white-200 border border-grey"
        style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}
      >
        <img
          onClick={() => navigate("/profile/coba")}
          src={icon.iconEdit}
          alt="Career Momen 1"
          className="object-cover w-[40px] h-[40px] ml-[180px] mt-[60px] cursor-pointer"
          style={{ borderRadius: "10px" }}
        />
        <img
          src={icon.profile}
          alt="Career Momen 1"
          className="object-cover w-[150px] h-[140px]"
        />
        <h1 className="font-medium mt-3 text-[32px]">Anonymous</h1>
        <div className="flex flex-col lg:mt-[35px] font-bold gap-2 ">
          {[
            ["Dashboard", icon.iconHome, "/profile/dashboard"],
            [
              "Kelas Saya",
              icon.iconCourse,
              "/profile/kelas-saya" || "/profile/kelas-saya/",
            ],
            ["Wishlist", icon.iconWishlist, "/profile/wishlist"],
            ["Event", icon.iconEvent, "/profile/event"],
            ["Transaksi", icon.iconTransaksi, "/profile/transaksi"],
          ].map(([title, img, url]) => (
            <NavLink
              to={url}
              style={NavlinkStyles}
              className="flex items-center w-[307px] h-[57px] ml-2 rounded-[10px] text-[#666666] hover:text-black500 hover:font-bold text-[24px]"
              key={title}
            >
              <img
                src={img}
                alt="Career Momen 1"
                className="object-cover w-[30px] h-[30px] mr-5 ml-5"
              />
              {title}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
