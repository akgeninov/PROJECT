import { icon } from "../../../constants";
import { Link } from "react-router-dom";

function DataKarirCard({ cardsData, index }) {
  return (
    <div className="flex flex-col gap-5 ">
      {cardsData.map((data) => (
      <Link
      to="/admin/karir/edit/:id"
      key={index}
      className="flex justify-start bg-whiteSmoke500 shadow-xl  border-2 border-black rounded-xl relative"
      >
      <div className="w-full px-6 min-[320px]:max-md:px-3 flex flex-row min-[320px]:max-lg:flex-col lg:flex-row items-start my-[16px] min-[320px]:max-lg:gap-5 ">
        <div className="flex flex-col gap-9 min-[320px]:max-lg:gap-5 lg:gap-9 ">
          <div className="flex flex-col gap-[12px] min-[320px]:max-lg:gap-1 ">
            <h1 className="font-heebo text-[22px] font-bold min-[320px]:max-lg:text-[20px] lg:text-[22px] ">
              {data.nama_lowongan_pekerjaan}
            </h1>
            <p className="font-heebo text-[16px] font-semibold text-[#12517C] min-[320px]:max-lg:text-[14px] lg:text-[16px] ">{data.id_departemen_pekerjaan}</p>
          </div>
          <div className="flex flex-row gap-6 min-[320px]:max-lg:gap-2 lg:gap-6 ">
            <div className="flex flex-row gap-2 min-[320px]:max-lg:gap-1 ">
              <img
                src={icon.Briefcase}
                alt="logo-jenjang"
                className="w-5 h-5 min-[320px]:max-[425px]:w-4 min-[320px]:max-[425px]:h-4"
              />
              <p className="font-heebo text-[16px] min-[320px]:max-lg:text-[12px] lg:text-[16px] font-light" >
                {data.id_jenjang_pekerjaan}
              </p>
            </div>
            <div className="flex flex-row gap-2 min-[320px]:max-lg:gap-1 ">
              <img
                src={icon.OfficeBuilding}
                alt="logo-tipe-pekerjaan"
                className="w-5 h-5 min-[320px]:max-[425px]:w-4 min-[320px]:max-[425px]:h-4"
              />
              <p className="font-heebo text-[16px] min-[320px]:max-lg:text-[12px] lg:text-[16px] font-light" >
                {data.id_tipe_pekerjaan}
              </p>
            </div>
            <div className="flex flex-row gap-2 min-[320px]:max-lg:gap-1 ">
              <img
                src={icon.UserCircle}
                alt="logo-persyaratan"
                className="w-5 h-5 min-[320px]:max-[425px]:w-4 min-[320px]:max-[425px]:h-4"
              />
              <p className="font-heebo text-[16px] min-[320px]:max-lg:text-[12px] lg:text-[16px] font-light" >
                {data.persyaratan_lowongan_pekerjaan}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row inset-y-0 right-0 absolute min-[320px]:max-lg:relative lg:absolute items-center px-9 min-[320px]:max-lg:px-1 lg:px-9 gap-10 min-[320px]:max-lg:gap-2 lg:gap-10 min-[320px]:max-lg:bottom-0 min-[320px]:max-lg:w-full lg:w-fit justify-between ">
          <div className="flex flex-col gap-1">  
            <p className="font-heebo text-[16px] min-[320px]:max-lg:text-[12px] lg:text-[16px] font-light ">Batas Lamar :</p>
            <p className="font-heebo text-[16px] min-[320px]:max-lg:text-[14px] lg:text-[16px] font-semibold">{data.batas_lamar}</p>
          </div>
          <div  >
            <img
              src={icon.chevronSmallDownLight}
              alt="arrow"
              className="-rotate-90"
            />
          </div>
        </div>
      </div>
      </Link>
    ))}
    </div>
)
}
export default DataKarirCard;