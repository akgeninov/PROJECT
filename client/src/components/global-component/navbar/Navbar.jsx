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
  const [isActive, setIsActive] = useState("home");
  const [toggleProfile, setTOggleProfile] = useState(false);

  // const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")));

  const { token } = useSelector((state) => state.userSlice);

  const handleClick = (title) => {
    if (title === "Layanan" || title === "Komunitas") {
      setToggle((prev) => ({
        layanan: title === "Layanan" ? !prev.layanan : false,
        komunitas: title === "Komunitas" ? !prev.komunitas : false,
      }));
      console.log("atas");
    } else {
      setToggle(() => ({
        layanan: false,
        komunitas: false,
      }));
      console.log("bawah");
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

        console.log({ getSameDropData });
      }
      console.log({ getSameData });
    } else {
      const getSameData = data.navigationData.filter(
        (el) => title.toLowerCase() === el.BUTTON_TEXT?.toLowerCase() && el.data
      );
      if (getSameData.length > 0) setIsActive(title);

      console.log({ title, getSameData });
    }

    // const routeNow = sessionStorage.getItem("active");
    // const oldRoute = JSON.parse(sessionStorage.getItem("active"));
    // const currentUrl = window.location.pathname;
    // const firstPath = currentUrl.split("/")[1];

    // const pageRoute = data.navigationData.filter((el) => !el.data);
    // const dropRoute = data.navigationData.filter((el) => el.data);
    // const isExist = pageRoute.some(
    //   (el) => el.BUTTON_TEXT.toLowerCase() === title.toLowerCase()
    // );

    // if ((oldRoute && isExist) || title === "home") {
    //   alert("atas");
    //   setIsActive(title);
    //   const isExistDrop = dropRoute.some(
    //     (el) => el.BUTTON_TEXT.toLowerCase() === oldRoute.toLowerCase()
    //   );
    //   if (!isExistDrop && oldRoute.toLowerCase() !== title.toLowerCase()) {
    //     sessionStorage.setItem("oldroute", JSON.stringify(oldRoute));
    //   } else {
    //   }
    //   sessionStorage.setItem("active", JSON.stringify(title));
    // } else {
    //   if (oldRoute && oldRoute.toLowerCase() === title.toLowerCase()) {
    //     alert("sini");
    //     const route = JSON.parse(sessionStorage.getItem("oldroute"));
    //     setIsActive(route);
    //     sessionStorage.setItem("active", JSON.stringify(route));
    //   } else {
    //     alert("bawah");
    //     if (isActive.toLowerCase() === title.toLowerCase()) {
    //       const route = JSON.parse(sessionStorage.getItem("active"));
    //       setIsActive(route);
    //     } else {
    //       setIsActive(title);
    //     }
    //   }
    // }

    // console.log({ pageRoute, isExist });
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

  const setNavbarActive = useMemo(() => {
    const route = JSON.parse(sessionStorage.getItem("active"));
    if (route) {
      setIsActive(route);
    } else {
      const currentUrl = window.location.pathname;
      const firstPath = currentUrl.split("/");
      if (firstPath[1] !== "") {
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
            // setIsActive("");
            navigate("/");
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
          {/* <button className="hidden xl:flex flex-auto w-[160px] px-[32px] py-[16px] justify-center items-center rounded-[10px] border-[1px] border-black500 bg-whiteSmoke500">
            <p className="w-[116px] flex-auto shrink-0 leading-[24px] font-medium text-[16px] text-[#0F1011] text-center ">
              Hubungi Kami
            </p>
          </button> */}

          {/* <button className="flex flex-auto w-[160px] px-[32px] py-[16px] justify-center items-center rounded-[10px] bg-black500 hover:bg-whiteSmoke800">
            <p className="w-[116px] shrink-0 text-whiteSmoke500 leading-[24px] font-medium text-[16px]">
              Login/Daftar
            </p>
          </button> */}

          {dataUser ? (
            <div className="relative flex justify-end items-center ">
              <div
                onClick={() => setTOggleProfile((prev) => !prev)}
                className="cursor-pointer px-[32px] py-[16px] flex justify-center items-center gap-[10px] border-[1px] rounded-[10px] border-black500"
              >
                <div className="w-[23px] h-[23px] rounded-full overflow-hidden ">
                  <img
                    src={`${process.env.REACT_APP_SERVER_URL}images/user/${dataUser.profile_picture}`}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="">
                  <h1 className="text-[16px] font-medium leading-[24px]">
                    {dataUser.username}
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
                      {dataUser.nama_lengkap}
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
