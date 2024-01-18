import React from "react";
import MainSection from "../../components/verifikasi/main-section/MainSection";
import { api } from "../../api/api";

function Verifikasi() {
  const getUser = async () => {
    try {
      // const response = await api.get("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center shrink-0">
      <MainSection />
    </div>
  );
}

export default Verifikasi;
