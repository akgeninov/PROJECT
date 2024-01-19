import React, { useEffect, useState } from "react";
import MainSection from "../../components/lms-kelas/main-section/MainSection";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

function LmsKelas() {
  return (
    <div className="flex w-full h-full flex-col justify-start  items-center shrink-0">
      <MainSection />
    </div>
  );
}

export default LmsKelas;
