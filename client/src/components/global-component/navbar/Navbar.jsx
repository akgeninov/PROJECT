import React, { useEffect, useMemo, useState } from "react";
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
import {
  setToken,
  setUser,
} from "../../../lib/redux-toolkit/feature/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userSlice);

  const [toggle, setToggle] = useState({
    layanan: false,
    komunitas: false,
  });

  const [dataUser, setDataUser] = useState(null);
  const [isActive, setIsActive] = useState("home");
  const [toggleProfile, setTOggleProfile] = useState(false);

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

  const handleChangeNavi = (title) => {
    console.log({ title });
    const currentUrl = window.location.pathname;
    const firstPath = currentUrl.split("/")[1];

    if (isActive.toLowerCase() === title.toLowerCase()) {
      const getSameData = data.navigationData.filter(
        (el) =>
          firstPath.toLowerCase() === el.navi?.split("/")[1]?.toLowerCase()
      );
      if (getSameData.length > 0) setIsActive(getSameData[0].BUTTON_TEXT);
      else {
        const getSameDropData = data.navigationData.filter((el) => {
          const getDrop = el.data?.filter(
            (nav) =>
              firstPath.toLowerCase() === nav.navi?.split("/")[1]?.toLowerCase()
          );
          return getDrop && getDrop.length > 0;
        });
        if (getSameDropData.length > 0)
          setIsActive(getSameDropData[0].BUTTON_TEXT);
        else setIsActive("home");
      }
    } else {
      const getSameData = data.navigationData.filter(
        (el) => title.toLowerCase() === el.BUTTON_TEXT?.toLowerCase() && el.data
      );
      if (getSameData.length > 0) setIsActive(title);
    }
  };
  useEffect(() => {
    console.log({ isActive });
  }, [isActive]);

  const locationChange = useMemo(() => {
    const currnetUrl = window.location.pathname;
    const firstPath = currnetUrl.split("/")[1];

    const getSameData = data.navigationData.filter(
      (el) => firstPath.toLowerCase() === el.navi?.split("/")[1]?.toLowerCase()
    );
    if (getSameData.length > 0) setIsActive(getSameData[0].BUTTON_TEXT);
    else {
      const getSameDropData = data.navigationData.filter((el) => {
        const getDrop = el.data?.filter(
          (nav) =>
            firstPath.toLowerCase() === nav.navi?.split("/")[1]?.toLowerCase()
        );
        return getDrop && getDrop.length > 0;
      });
      if (getSameDropData.length > 0)
        setIsActive(getSameDropData[0].BUTTON_TEXT);
      else setIsActive("home");
    }
  }, [window.location.pathname]);

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
      dispatch(setUser(response.data.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("auth");
    signOut(auth);
    setDataUser(null);
    dispatch(setUser(null));
    dispatch(setToken(null));
    setTOggleProfile(false);
  };

  const setNavbarActive = useMemo(() => {
    const route = JSON.parse(sessionStorage.getItem("active"));
    if (route) {
      setIsActive(route);
    } else {
      const currentUrl = window.location.pathname;
      const firstPath = currentUrl.split("/");
      if (
        firstPath[1] !== "" &&
        firstPath[1] !== "login" &&
        firstPath[1] !== "register" &&
        firstPath[1] !== "profile"
      ) {
        console.log(firstPath[1] !== "login");

        const getDataPath = data.navigationData.filter(
          (el) => `${el.navi && el.navi.split("/")[1]}` === firstPath[1]
        );

        setIsActive(getDataPath[0].BUTTON_TEXT);
        sessionStorage.setItem(
          "active",
          JSON.stringify(getDataPath[0].BUTTON_TEXT)
        );

        console.log({
          firstPath: firstPath[1],
          data: data.dataService,
          getDataPath,
        });
      } else {
        sessionStorage.setItem("active", JSON.stringify("home"));
      }
    }
  }, []);

  useEffect(() => {}, [dataUser]);

  useEffect(() => {
    console.log("jalan");
    if (JSON.parse(localStorage.getItem("auth"))) {
      dispatch(setToken(JSON.parse(localStorage.getItem("auth"))));
      getUserData(JSON.parse(localStorage.getItem("auth")));
    } else {
      localStorage.removeItem("auth");
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
            handleChangeNavi("home");
            // setIsActive("");
            navigate("/");
          }}
          className=" w-[100px] h-[100px] shrink-0 cursor-pointer hidden md:block"
          src={logo.growlab}
          alt="growlab"
        />
        <img
          onClick={() => {
            handleClick("");
            handleChangeNavi("home");
            navigate("/");
          }}
          className=" w-[44px] h-[44px] shrink-0 cursor-pointer block md:hidden"
          src={logo.growlabMobile}
          alt="growlab"
        />
        <ul className="hidden lg:inline-flex items-start gap-[16px]">
          {data.navigationData.map((el, index) => (
            <NavigationComponent
              handleClick={handleClick}
              handleChangeNavi={handleChangeNavi}
              key={index}
              BUTTON_TEXT={el.BUTTON_TEXT}
              icon={icon}
              toggle={toggle}
              setToggle={setToggle}
              DATA={el.data}
              setIsActive={setIsActive}
              isActive={isActive}
              navi={el.navi}
            />
          ))}
        </ul>
        <div className="hidden lg:flex gap-[24px]">
          {user ? (
            <div className="relative flex justify-end items-center ">
              <div
                onClick={() => setTOggleProfile((prev) => !prev)}
                className="cursor-pointer px-[32px] py-[16px] flex justify-center items-center gap-[10px] border-[1px] rounded-[10px] border-black500"
              >
                <div className="w-[23px] h-[23px] rounded-full overflow-hidden ">
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}images/user/${user.profile_picture}`}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="">
                  <h1 className="text-[16px] font-medium leading-[24px]">
                    {user.username}
                  </h1>
                </div>
              </div>

              <div
                className={`${
                  toggleProfile ? "block" : "hidden"
                } absolute z-50 translate-y-48  py-[12px] bg-whiteSmoke500 shadow-customSm rounded-[10px]`}
              >
                <ul className="w-[268px] gap-[4px] text-[16px] font-medium">
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start ">
                    <h1 className="text-[14px] font-bold leading-[20px]">
                      {user.nama_lengkap}
                    </h1>
                    <p className="text-[14px] font-light leading-[20px]">
                      {user.email}
                    </p>
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer">
                    <Link
                      to={"/profile/coba"}
                      onClick={() => setTOggleProfile(false)}
                    >
                      Profil Saya
                    </Link>
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer ">
                    <Link
                      to={"/profile/dashboard"}
                      onClick={() => setTOggleProfile(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="px-[24px] py-[12px] flex flex-col justify-center items-start cursor-pointer">
                  <Link
                      to={"/profile/transaksi"}
                      onClick={() => setTOggleProfile(false)}
                    >
                      Transaksi
                    </Link>
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
            <>
              <div>
                <ButtonBorderBlack500
                  TEXT_BUTTON={"Hubungi Kami"}
                  WIDTH={"w-[160px]"}
                  RESPONSIF={"hidden xl:flex"}
                />
              </div>
              <div onClick={() => navigate("/login")}>
                <ButtonBlack500
                  WIDTH={"w-[160px]"}
                  TEXT_BUTTON={"Login/Daftar"}
                />
              </div>
            </>
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
