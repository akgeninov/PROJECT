import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarKelasSaya() {
  const parentPath = useLocation().pathname;
  const [dropdownShow, setDropdownShow] = useState(false);
  const [options, setOption] = useState();

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
  };

  const handleOption = (option) => {
    setOption(option);
  };

  const statusKelas = [
    ["Semua Kelas", "/profile/kelas-saya/semua-kelas"],
    ["Belum Dimulai", "/profile/kelas-saya/belum-dimulai"],
    ["Sedang Dipelajari", "/profile/kelas-saya/sedang-dipelajari"],
    ["Selesai", "/profile/kelas-saya/selesai"],
  ];

  // if (parentPath === "/profile/kelas-saya" || parentPath === "/profile/kelas-saya/") {

  // }

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      fontSize: "24px",
      textUnderlineOffset: "30px",
    };
  };

  const activeLink =
    "[&>hr]:opacity-100 delay-700 duration-300 ease-in-out  items-center justify-center flex flex-col";

  const unactiveLink = "[&>hr]:opacity-0";

  return (
    <div className="flex-initial">
      {/* lg:Submenu */}
      <nav className="hidden lg:flex gap-[27px] mb-[54px]">
        {statusKelas.map(([title, url]) => (
          <NavLink
            to={url}
            style={NavlinkStyles}
            className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
            id={title}
          >
            a
            <hr className="w-[39px] h-[5px] bg-black500 border-3 rounded-[50px]"></hr>
          </NavLink>
        ))}
      </nav>

      <div className="relative inline-block lg:hidden text-left w-[358px] sm:w-[500px] mb-[54px]">
        <div>
          <button
            type="button"
            className="inline-flex justify-between items-center w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-[12px] font-normal text-black500 leading-[30px] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            onClick={toggleDropDown}
          >
            {/* {statusKelas.filter((title, url)=> parentPath === url ? title : "Semua Kelas")} */}
            Option
            <div className="flex items-center">
              <hr className="rotate-90 w-[16px] bg-[rgba(102,102,102,0.5)] border-1" />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-[18px] h-[18px] text-slate-600"
              />
            </div>
          </button>
        </div>

        {dropdownShow ? (
          <div className="absolute right-0 z-10 mt-2 w-[358px] sm:w-[500px] origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-gray-300">
            {statusKelas.map(([title, url]) => (
              <NavLink
                to={url}
                className={({ isActive }) =>
                  isActive
                    ? "text-black500 text-[12px] leading-[30px] block px-4 py-2 font-normal border-[1px] rounded-[5px] border-whiteSmoke600 shadow-lg shadow-gray-300"
                    : "text-whiteSmoke800 text-[12px] leading-[30px] block px-4 py-2"
                }
                onClick={toggleDropDown}
              >
                {title}
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>

      <Outlet />
    </div>
  );
}
// ${parentPath === "/profile/kelas-saya" || parentPath === "/profile/kelas-saya/" ? activeLink : unactiveLink}
