import React, { useEffect, useState } from "react";
import { icon, logo, data } from "../../../constants";
import { HiMenu } from "react-icons/hi";
import ButtonBlack500 from "../button/button-black500/ButtonBlack500";
import ButtonBorderWhitesmoke500 from "../button/button-borderwhitesmoke500/ButtonBorderWhitesmoke500";
import ButtonBorderBlack500 from "../button/button-borderblack500/ButtonBorderBlack500";
import NavigationComponent from "./navigationComponent/NavigationComponent";
import { api } from "../../../api/api";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../lib/redux-toolkit/feature/user/userSlice";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState({
    layanan: false,
    komunitas: false,
  });

  const [dataUser, setDataUser] = useState(null);
  const [isActive, setIsActive] = useState("");
  const [toggleProfile, setTOggleProfile] = useState(false);

  // const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")));

  const { token } = useSelector((state) => state.userSlice);

  const handleClick = (title) => {
    if (title === "Layanan" || title === "Komunitas") {
      setToggle((prev) => ({
        layanan: title === "Layanan" ? !prev.layanan : false,
        komunitas: title === "Komunitas" ? !prev.komunitas : false,
      }));
    } else {
      setToggle(() => ({
        layanan: false,
        komunitas: false,
      }));
    }
  };

  const getUserData = async (token) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
        {
          headers: {
            Authorization: token,
            Accept: "appplication/json",
            "Content-Type": "application/json",
          },
        }
      );
      setDataUser(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("auth");
    signOut(auth);
    setDataUser(null);
    setTOggleProfile(false);
  };

  useEffect(() => {
    console.log({ dataUser: dataUser });
  }, [dataUser]);

  useEffect(() => {
    console.log("jalan");
    if (JSON.parse(localStorage.getItem("auth"))) {
      dispatch(setToken(JSON.parse(localStorage.getItem("auth"))));
      getUserData(JSON.parse(localStorage.getItem("auth")));
    } else {
      localStorage.setItem("auth", null);
      setDataUser(null);
    }
    console.log({ token });
  }, [token]);

  return (
    <div className=" flex  justify-center  w-full items-center h-[120px] bg-whiteSmoke500 ">
      <div className=" flex px-[5px] xl:px-0 max-w-[1080px] w-[356px] sm:w-auto  flex-1 justify-between  items-center shrink-0 ">
        <img
          onClick={() => {
            handleClick("");
            setIsActive("");
          }}
          className=" w-[100px] h-[100px] shrink-0 cursor-pointer hidden md:block"
          src={logo.growlab}
          alt="growlab"
        />
        <img
          onClick={() => {
            handleClick("");
            setIsActive("");
          }}
          className=" w-[44px] h-[44px] shrink-0 cursor-pointer block md:hidden"
          src={logo.growlabMobile}
          alt="growlab"
        />
        <ul className="hidden lg:inline-flex items-start gap-[16px]">
          {/* <li className="relative flex py-[4px] px-[8px] items-center ">
            <button
              onClick={() =>
                setIsActive((prev) => ({
                  layanan: !prev.layanan,
                  komunitas: false,
                }))
              }
              className="flex items-center gap-[4px] cursor-pointer "
            >
              <p className=" font-semibold">Layanan</p>
              <img
                src={icon.chevronSmallDownLight}
                className={`${
                  isActive.layanan ? "-rotate-180" : "rotate-0"
                } w-[20px] h-[20px] duration-300`}
                alt="chev"
              />
            </button>

            <div
              className={`${
                isActive.layanan
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } duration-300 absolute rounded-[10px] -left-[16px] top-[44px] shadow-customSm`}
            >
              <div
                className={`${
                  isActive.layanan
                    ? " translate-y-0  pointer-events-auto "
                    : "-translate-y-full  pointer-events-none "
                }  relative duration-300 w-[268px] overflow-hidden rounded-[10px] `}
              >
                <div
                  className={`${
                    isActive.layanan ? "translate-y-0" : "translate-y-full"
                  } relative duration-300 bg-whiteSmoke500 py-[16px]  flex-col   `}
                >
                  {data.dataLayanan.map((el, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer px-[24px] py-[12px] items-center hover:bg-black50`}
                    >
                      <p className="shrink-0  ">{el.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="relative flex py-[4px] px-[8px] items-center cursor-pointer ">
            <button
              onClick={() =>
                setIsActive((prev) => ({
                  layanan: false,
                  komunitas: !prev.komunitas,
                }))
              }
              className=" flex items-center gap-[4px]"
            >
              <p className=" font-semibold">Komunitas</p>
              <img
                className={`${
                  isActive.komunitas ? "-rotate-180" : "rotate-0"
                } w-[20px] h-[20px] duration-300`}
                src={icon.chevronSmallDownLight}
                alt="chev"
              />
            </button>
            <div
              className={`${
                isActive.komunitas
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } duration-300 absolute rounded-[10px] -left-[16px] top-[44px] shadow-customSm`}
            >
              <div
                className={`${
                  isActive.komunitas
                    ? " translate-y-0  pointer-events-auto "
                    : "-translate-y-full  pointer-events-none "
                }  relative duration-300 w-[268px] overflow-hidden rounded-[10px] `}
              >
                <div
                  className={`${
                    isActive.komunitas ? "translate-y-0" : "translate-y-full"
                  } relative duration-300 bg-whiteSmoke500 py-[16px]  flex-col   `}
                >
                  {data.dataKomunitas.map((el, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer px-[24px] py-[12px] items-center hover:bg-black50`}
                    >
                      <p className="shrink-0  ">{el.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <li className="flex py-[4px] px-[8px] items-cente cursor-pointer">
            <p className=" font-semibold">Artikel</p>
          </li>
          <li className="flex py-[4px] px-[8px] items-cente cursor-pointer">
            <p className=" font-semibold">Karir</p>
          </li>
          <li className="flex py-[4px] px-[8px] items-cente cursor-pointer">
            <p className=" font-semibold">Tentang Kami</p>
          </li> */}
          {data.navigationData.map((el, index) => (
            <NavigationComponent
              handleClick={handleClick}
              key={index}
              BUTTON_TEXT={el.BUTTON_TEXT}
              icon={icon}
              toggle={toggle}
              setToggle={setToggle}
              DATA={el.data}
              setIsActive={setIsActive}
              isActive={isActive}
            />
          ))}
        </ul>
        <div className="hidden lg:flex gap-[24px]">
          {/* <button className="hidden xl:flex flex-auto w-[160px] px-[32px] py-[16px] justify-center items-center rounded-[10px] border-[1px] border-black500 bg-whiteSmoke500">
            <p className="w-[116px] flex-auto shrink-0 leading-[24px] font-medium text-[16px] text-[#0F1011] text-center ">
              Hubungi Kami
            </p>
          </button> */}
          <div>
            <ButtonBorderBlack500
              TEXT_BUTTON={"Hubungi Kami"}
              WIDTH={"w-[160px]"}
              RESPONSIF={"hidden xl:flex"}
            />
          </div>

          {/* <button className="flex flex-auto w-[160px] px-[32px] py-[16px] justify-center items-center rounded-[10px] bg-black500 hover:bg-whiteSmoke800">
            <p className="w-[116px] shrink-0 text-whiteSmoke500 leading-[24px] font-medium text-[16px]">
              Login/Daftar
            </p>
          </button> */}

          {dataUser ? (
            <div className="relative flex justify-center items-center ">
              <div
                onClick={() => setTOggleProfile((prev) => !prev)}
                className="w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer"
              >
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}images/user/${dataUser.profile_picture}`}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className={`${
                  toggleProfile ? "block" : "hidden"
                } absolute z-50 translate-y-48 -translate-x-28 py-[12px] bg-whiteSmoke500 shadow-customSm rounded-[10px]`}
              >
                <ul className="w-[268px] gap-[4px] text-[16px] font-medium">
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start ">
                    <h1 className="text-[14px] font-bold leading-[20px]">
                      {dataUser.nama_user}
                    </h1>
                    <p className="text-[14px] font-light leading-[20px]">
                      {dataUser.email}
                    </p>
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer">
                    Profile Saya
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer ">
                    Kelas Saya
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer">
                    Wishlist
                  </li>
                  <li
                    onClick={logOut}
                    className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer"
                  >
                    Keluar
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <ButtonBlack500
                WIDTH={"w-[160px]"}
                TEXT_BUTTON={"Login/Daftar"}
              />
            </div>
          )}
        </div>
        <button className="flex lg:hidden  p-[4px]  justify-center items-center  bg-whiteSmoke500">
          <img src={icon.line3solid} alt="line3" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
