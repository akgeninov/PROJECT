import React, { useEffect, useState } from "react";
import MainSection from "../../components/lms-kelas/main-section/MainSection";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

function LmsKelas() {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <div
      className={`${
        fullscreen
          ? " absolute w-screen h-screen overflow-hidden top-0 left-0"
          : "static"
      } flex w-full h-full flex-col  justify-start overflow-x-hidden items-center shrink-0`}
    >
      <MainSection fullscreen={fullscreen} setFullscreen={setFullscreen} />
    </div>
  );
}

export default LmsKelas;
