import React, { useEffect, useState } from "react";
import Navbar from "../components/global-component/navbar/Navbar";
import Footer from "../components/global-component/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <Navbar />
        {children}
        <Footer />
      </>
    ) : (
      children
    )
  ) : null;
}

export default Protection;
