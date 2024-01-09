import React from "react";
//import { Link } from "react-router-dom";
import { images } from "../../../../constants";
import { FaBook, FaSignal, FaUser, FaStar, FaBookmark } from "react-icons/fa";

export default function WishlistCard({wishlist}) {
  console.log(wishlist);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} style={{ fontSize: "1em", color: "gold", marginRight: "5px" }} />);
    }
    return stars;
  };

  return (
    <div className="flex">
      <div className="w-[232px] h-[432px] bg-white-200 mr-[20px] " style={{ boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <img
          src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${wishlist.kelas_bisni?.image}`|| images.Linkedin}
          alt={wishlist.kelas_bisni?.nama || "No Data"}
          className="w-[232px] h-[176px] object-cover rounded-[10px]"
        />
        <div className="ml-[20px] mt-[20px]">
          <h2 className="font-bold mb-[10px]">
          {wishlist.kelas_bisni?.nama || "No Data"}
          </h2>
          <p className="mb-[10px]" style={{ display: "flex", alignItems: "center", color: " #3F4041", fontSize: "14px" }}>
            <FaBook className="mr-[5px]" style={{ fontSize: "1em" }} />
            {wishlist.kelas_bisni?.id_kelas_kategori.nama || "No Data"}
            <FaSignal className="ml-[10px] mr-[5px]" style={{ fontSize: "1em" }} />
            {wishlist.kelas_bisni?.id_kelas_level || "No Data"}
          </p>
          <p className="mb-[10px]" style={{ display: "flex", alignItems: "center", color: " #3F4041", fontSize: "14px" }}>
            <FaUser className="mr-[5px]" style={{ fontSize: "1em" }} /> 2124 Pendaftar
          </p>
          <div className="mb-[10px]" style={{ display: "flex", alignItems: "center" }}>
            {renderStars()} 
            <p style={{color: " #3F4041", fontSize: "14px"}}>5.0</p>
          </div>
          <div className="mb-[10px]" style={{ display: "flex", alignItems: "center" }}>
            <p style={{ textDecoration: "line-through", color: " #3F4041", fontSize: "14px" }}>Rp.500.000</p>
            <p className="ml-[5px]" style={{color:"#BA0000", fontSize: "14px"}} >7%</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className="font-bold" style={{color: " #12517C", fontSize: "22px"}}>
              Rp. <span>
            {wishlist.kelas_bisni?.harga || "No Data"} </span>
            </h2>
            <FaBookmark className="ml-auto mr-[15px]" style={{fontSize: "1.5em"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
