import React from "react";
import HeadRegister from "../../components/register/head-register/HeadRegister";
import MainSection from "../../components/register/main-section/MainSection";

function Register() {
  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeadRegister />
      <MainSection />
    </div>
  );
}

export default Register;
