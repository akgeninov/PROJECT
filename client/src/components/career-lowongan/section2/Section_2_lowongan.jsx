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
        className="grid grid-cols-2 divide-x rounded border-none p-6" 
        style={{
          width: "1080px",
          height: "160px",
          boxShadow: "2px 2px 12px 0px #0101011A",
        }}
      >
        <div className="border-none"> {/* Menggunakan border-none pada elemen anak */}
          <div className="grid grid-cols-1 divide-y">
            <div className="font-bold text-[22px] border-none">{props.lowongan.nama_lowongan_pekerjaan}</div>
            <div className="font-semibold text-[#12517C] text-[16px] border-none">{props.lowongan.departemen.nama_departemen_pekerjaan}</div>
            <div className="border-none">
              <div className="grid grid-cols-3 divide-x lg:mt-[30px] lg:text-[16px]">
                <div className="flex justify-center border-none">{props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}</div>
                <div className="flex justify-center border-none">{props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}</div>
                <div className="flex justify-center border-none">{props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end h-full border-none"> {/* Menggunakan border-none pada elemen anak */}
          <div>Batas Lamar :&nbsp;&nbsp;<br/>{props.lowongan.batas_lamar}&nbsp;&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default Section_2_lowongan;
