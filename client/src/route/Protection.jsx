import React from "react";
import Navbar from "../components/global-component/navbar/Navbar";
import Footer from "../components/global-component/footer/Footer";

function Protection({
  children,
  publicSide = false,
  userOnly = false,
  adminOnly = false,
}) {
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
