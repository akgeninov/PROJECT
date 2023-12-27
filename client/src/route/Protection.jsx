import React, { useEffect } from "react";
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

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth"));
    console.log({ publicSide, userOnly, adminOnly });

    if (publicSide && token && !userOnly && !adminOnly) {
      navigate("/");
    }
  }, [publicSide, userOnly, adminOnly, tokenFromRedux]);

  return publicSide || userOnly ? (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ) : (
    children
  );
}

export default Protection;
