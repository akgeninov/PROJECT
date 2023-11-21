import React from "react";
import Navbar from "../components/global-component/navbar/Navbar";

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
    </>
  ) : (
    children
  );
}

export default Protection;
