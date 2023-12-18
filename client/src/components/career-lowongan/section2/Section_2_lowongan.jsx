import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding,faBriefcase,faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Section_2_lowongan(props) {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    // Navigate to your desired route upon container click
    navigate("/career-lowongan/" + props.lowongan.id);
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  }
  
  return (
    <div>
      <div
        className="p-4 w-full  flex justify-center"
      >      
        <div
          className="grid grid-cols-2 divide-x rounded-md border-none p-6 cursor-pointer" 
          onClick={handleContainerClick}

          style={{
            width: "1080px",
            height: "160px",
            boxShadow: "2px 2px 12px 0px #0101011A",
          }}
        >
          <div className="border-none text-[#3F4041]"> 
            <div className="grid grid-cols-1 divide-y">
              <div className="font-bold text-[22px] border-none">{props.lowongan.nama_lowongan_pekerjaan}</div>
              <div className="font-semibold text-[#12517C] text-[16px] border-none">{props.lowongan.departemen.nama_departemen_pekerjaan}</div>
                <div className="border-none">
                  <div className="flex items-center gap-3 mt-5 text-[#919192]">
                    <FontAwesomeIcon icon={faBriefcase} />
                    {props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}{' '}
                    <FontAwesomeIcon icon={faBuilding} />
                    {props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}{' '}
                    <FontAwesomeIcon icon={faUserCircle} />
                    {props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}
                  </div>
                </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end h-full border-none lg:text-[16px]">
            <div>Batas Lamar :&nbsp;&nbsp;<br/><p className="font-semibold">{formatDate(props.lowongan.batas_lamar)}&nbsp;&nbsp;</p></div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Section_2_lowongan;
