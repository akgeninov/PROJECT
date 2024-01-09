import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";

export default function SidebarDetailprofile() {
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#0F1011" : "#666",
      backgroundColor: "#F4F4F4",
      boxShadow: isActive ? "3px 3px 7px rgba(128,128,128,0.3)" : "",
    };
  };

  const menuEdit = [
    ["Detail Profil", `/profile/${user?.username || ""}`],
    ["Data Pribadi", "/profile/dashboard"],
    ["Informasi Lainnya", "/profile/info-lain"],
    ["Ubah Password", "/profile/password"],
  ];

  useEffect(() => {
    if (!user || !user.username) navigate("/");
  }, [user]);

  return (
    <div className="flex flex-row justify-start lg:mt-[12px]  px-[10px] lg:px-0  w-full  min-h-screen ">
      <div className="w-[411px] lg:flex hidden  flex-col items-start ">
        <h1 className="pl-[66px] ml-2 mb-[18px] text-[32px] font-bold leading-[72px]">
          Ubah Profil
        </h1>
        <div
          className="flex flex-col items-start pl-[66px] pr-[32px] w-full h-fit bg-white-200 border border-grey"
          style={{ boxShadow: "1px 1px 3px rgba(128, 128, 128, 0.3)" }}
        >
          <div className="flex flex-col lg:mt-[35px] font-bold gap-2 ">
            {menuEdit.map(([title, url]) => (
              <NavLink
                to={url}
                style={NavlinkStyles}
                className="flex items-center w-[307px] h-[57px] ml-2 rounded-[10px] text-[#666666] hover:text-black500 hover:font-bold text-[24px]"
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full flex  justify-center ">
        <Outlet />
      </div>
    </div>
  );
}
