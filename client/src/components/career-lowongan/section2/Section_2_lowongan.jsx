import React from "react";
import { useNavigate } from "react-router-dom";

function Section_2_lowongan(props) {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    // Navigate to your desired route upon container click
    navigate("/career-lowongan/" + props.lowongan.id);
  };

  return (
    <div
      className="p-4 w-full cursor-pointer flex justify-center"
      onClick={handleContainerClick}
    >
      <div
        className="grid grid-cols-2 divide-x shadow-inner rounded"
        style={{ width: "1080px", height: "160px" }}
      >
        <div>
          <div className="grid grid-cols-1 divide-y">
            <div className="font-bold text-lg">{props.lowongan.nama_lowongan_pekerjaan}</div>
            <div className="text-gray-500">{props.lowongan.departemen.nama_departemen_pekerjaan}</div>
            <div>
              <div className="grid grid-cols-3 divide-x">
                <div className="flex justify-center">{props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}</div>
                <div className="flex justify-center">{props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}</div>
                <div className="flex justify-center">{props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-full"> {/* Menggunakan flex-col dan items-end untuk menurunkan ke tengah bawah */}
          <div>Batas Lamar :&nbsp;&nbsp;<br/>{props.lowongan.batas_lamar}&nbsp;&nbsp;
           </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2_lowongan;
