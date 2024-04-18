import { clientPic } from "../../constants";
import AdminHeader from "../global-component/admin-header/AdminHeader";
import { data } from "../../constants";
import { api } from "../../api/api";
import KarirCard from "./karir-card/KarirCard";
import { icon } from "../../constants";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import KarirForm from "./karir-form/KarirForm";




// const dataKarir = [
//   {
//     nama_lowongan_pekerjaan: "UI/UX Designer",
//     batas_lamar: "31 Desember 2023",
//     deskripsi_lowongan_pekerjaan: "qwertyuiop",
//     persyaratan_lowongan_pekerjaan: "Lulusan Baru",
//     id_departemen_pekerjaan: "Technology",
//     id_periode_pekerjaan: "5 Bulan",
//     id_tipe_pekerjaan: "Work From Anywhere",
//     id_jenjang_pekerjaan: "Full Time",
//   },
//   {
//     nama_lowongan_pekerjaan: "Social Media Admin",
//     batas_lamar: "31 Desember 2023",
//     deskripsi_lowongan_pekerjaan: "qwertyuiop",
//     persyaratan_lowongan_pekerjaan: "Lulusan Baru",
//     id_departemen_pekerjaan: "Sales & Marketing",
//     id_periode_pekerjaan: "5 Bulan",
//     id_tipe_pekerjaan: "Work From Anywhere",
//     id_jenjang_pekerjaan: "Full Time",
//   },
//   {
//     nama_lowongan_pekerjaan: "Accounting Staff",
//     batas_lamar: "31 Desember 2023",
//     deskripsi_lowongan_pekerjaan: "qwertyuiop",
//     persyaratan_lowongan_pekerjaan: "Lulusan Baru",
//     id_departemen_pekerjaan: "Finance, Accounting & Tax",
//     id_periode_pekerjaan: "5 Bulan",
//     id_tipe_pekerjaan: "Work From Anywhere",
//     id_jenjang_pekerjaan: "Full Time",
//   },
//   {
//     nama_lowongan_pekerjaan: "Project Manager",
//     batas_lamar: "31 Desember 2023",
//     deskripsi_lowongan_pekerjaan: "qwertyuiop",
//     persyaratan_lowongan_pekerjaan: "Lulusan Baru",
//     id_departemen_pekerjaan: "Technology",
//     id_periode_pekerjaan: "5 Bulan",
//     id_tipe_pekerjaan: "Work From Anywhere",
//     id_jenjang_pekerjaan: "Full Time",
//   },
// ];

function AdminKarirSection() {
  const [dataKarir, setDataKarir] = useState([]);
  const [editData, setEditData] = useState(null);
  const handleEditClick = (data) => {
    setEditData(data);
  };
  const [isAdding, setIsAdding] = useState(false);
  const handleAddClick = () => {
    setEditData(null);
    setIsAdding(true);
  };
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}/lowongan/allLowongan`);
        setDataKarir(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  

  return (
    <div>
      {isAdding ? (
        <KarirForm />
      ) : (
        <div className="w-full flex flex-col grow-0 px-28 py-8">
          <AdminHeader title="List Lowongan" showSearchBar />
            <Link
              to="/admin/karir/create"
              onClick={handleAddClick}
              className="flex flex-row justify-start bg-whiteSmoke500 shadow-xl  border-2 border-black rounded-xl mb-5 gap-4 min-[320px]:max-md:border-b-4 min-[320px]:max-md:border-r-4"
            >
              <div className="flex flex-row gap-4 my-9 mx-4 items-center">
                <img
                  src={icon.iconPlus}
                  alt="add"
                  className="w-8 h-8 border"
                  />
                <div className="flex flex-col gap-2">
                  <h1 className="font-heebo text-[22px] min-[320px]:max-md:text-[18px] font-bold">Tambahkan Lowongan</h1>
                  <p className="font-heebo text-[16px] font-medium">Deskripsi</p>
                </div>
              </div>
            </Link>
            <div className="flex flex-col gap-4">
              <KarirCard cardsData={dataKarir} onEditClick={handleEditClick} />
              </div>
            </div>
          )}
        </div>
  );
}

export default AdminKarirSection;
