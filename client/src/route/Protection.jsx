import React, { useEffect, useState } from "react";
import Navbar from "../components/global-component/navbar/Navbar";
import Footer from "../components/global-component/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarMobile from "../components/global-component/navbar-mobile/NavbarMobile";
import { images, logo } from "../constants";

function Protection({
  children,
  publicSide = false,
  userOnly = false,
  adminOnly = false,
}) {
  const navigate = useNavigate();
  const tokenFromRedux = useSelector((state) => state.userSlice.token);
  const [readyToRender, setReadyToRender] = useState(false);
  useEffect(() => {
    setReadyToRender(false);
    const token = JSON.parse(localStorage.getItem("auth"));
    console.log({ publicSide, userOnly, adminOnly });

    if (publicSide && token && !userOnly && !adminOnly) {
      navigate("/");
    } else if ((!token && userOnly) || adminOnly) {
      navigate("/");
    }
    console.log({ token });
    setReadyToRender(true);
  }, [publicSide, userOnly, adminOnly, tokenFromRedux]);
  console.log({ publicSide, userOnly, adminOnly });

  return readyToRender ? (
    publicSide || userOnly ? (
      <>
        {/* <div className="w-screen hidden lg:flex"> */}
        <Navbar />
        {/* </div> */}
        {/* <div className="w-screen relative flex lg:hidden">
          <NavbarMobile />
        </div> */}
        {children}
        <Footer />
      </>
    ) : (
      children
    )
  ) : null;
}

export default Protection;
