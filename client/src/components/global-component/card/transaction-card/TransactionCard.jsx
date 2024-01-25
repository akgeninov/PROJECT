import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import 'moment/locale/id';

export default function TransactionCard(transaksi) {
  const [dropdownShow, setDropdownShow] = useState(false);
  // console.log(transaksi);
  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
  };
  const rupiah = (num) => {
    if (typeof num === "number") {
      return `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
    } else {
      return num;
    }
  };

  const labelColor = (status) => {
    if (status === "success") {
      return "bg-[#278B03]";
    } else if (status === "canceled") {
      return "bg-[#A12105]";
    } else {
      return "bg-[#E49333]";
    }
  };
  const total = (status, price) => {
    if (status === "success") {
      return price;
    } else if (status === "canceled") {
      return "Dibatalkan";
    } else {
      return "Menunggu Konfirmasi";
    }
  };
  return (
    <>
      <div className="flex flex-col w-[358px] h-[204px] justify-between md:w-[500px] md:h-[280px] lg:w-[750px] lg:h-[346px] border-[1px] border-whiteSmoke700 mb-[30px] rounded-[10px] shadow-md shadow-gray-300">
        <div className="h-[38px] lg:h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[12px] lg:text-[18px] font-medium leading-[30px] rounded-t-[10px]">
          <p className="lg:w-[335px] lg:mr-[10px]">
            <span className="lg:inline hidden">Waktu Pembayaran, </span>
            {moment(transaksi.transaksi.date_transaksi).format(
              "DD MMMM YYYY, h:mm"
            )}
          </p>
          <div className="border-l border-[#666666] border-opacity-30 h-[45px] w-[2px] lg:block hidden"></div>
          <Link
            to={`/profile/transaksi/${transaksi.transaksi.id}/lihat-invoice`}
          >
            <p className="h-[60px] mx-[10px] lg:inline-block hidden hover:underline hover:text-[#1C64F2]">
              <span className="line-clamp-1">
                No. Invoice: {transaksi.transaksi.nomor_invoice}
              </span>
            </p>
          </Link>
          <div className="flex flex-row items-center">
            <div
              className={`${labelColor(
                transaksi.transaksi.status_transaksi
              )} flex justify-center items-center w-[67px] h-[24px] lg:w-[109px] lg:h-[36px] text-center border-[1px] rounded-[5px] lg:rounded-[10px] text-whiteSmoke500`}
            >
              {transaksi.transaksi.status_transaksi === "success"
                ? "Berhasil"
                : transaksi.transaksi.status_transaksi === "canceled"
                ? "Dibatalkan"
                : "Menunggu"}
            </div>
            <div className="relative flex items-center lg:hidden text-left w-fit pl-2">
              <button
                type="button"
                className="inline-flex justify-between items-center w-fit"
                onClick={toggleDropDown}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="w-[18px] h-[18px] text-slate-600"
                />
              </button>
              {dropdownShow ? (
                <div className="absolute right-0 top-4 z-10 mt-2 flex items-center w-[121px] h-[42px] origin-top-right rounded-[5px] bg-[#F4F4F4] ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-gray-300">
                  <Link
                    to={`/profile/transaksi/${transaksi.transaksi.id}/lihat-invoice`}
                    // className={({ isActive }) =>
                    //   isActive
                    //     ? "text-black500 text-[12px] leading-[20px] font-normal border-[1px] rounded-[5px] border-whiteSmoke600 shadow-lg shadow-gray-300"
                    //     : "text-whiteSmoke800 text-[12px] leading-[20px] font-bold"
                    // }
                    className="text-black500 text-[12px] leading-[20px] font-normal ml-2 active:font-bold"
                    onClick={toggleDropDown}
                  >
                    Lihat Invoice
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex lg:h-[198px] px-[11px] items-start lg:items-center">
          <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}images/kelas/${transaksi.transaksi.kelas_bisni.image}`}
              alt={transaksi.transaksi.kelas_bisni.nama || "No data"}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[160px] lg:leading-[28px] justify-start">
            <p className="text-[14px] lg:text-[24px] font-medium lg:w-[50%] w-[160px] mb-[15px]">
              {transaksi.transaksi.kelas_bisni.nama}
            </p>
            <div className="lg:block hidden h-[150px] w-[2px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
            <div className=" lg:h-[160px] lg:pl-[25px] text-[12px] lg:text-[24px] font-medium">
              <p className="text-[#666666] mb-[5px] lg:mb-[72px]">
                Harga Produk
              </p>
              <p className="text-[#0F1011]">
                {rupiah(transaksi.transaksi.kelas_bisni.harga)}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[38px] lg:h-[74px] flex items-center rounded-b-[10px] bg-[rgba(204,204,204,0.2)] px-[11px] text-[12px] lg:text-[24px] leading-[72px] font-medium">
          <p className="w-[55%] lg:w-[65%] text-[#666666]">Total Pembayaran</p>
          <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right lg:text-left">
            {total(
              transaksi.transaksi.status_transaksi,
              rupiah(transaksi.transaksi.kelas_bisni.harga)
            )}
          </p>
        </div>
      </div>
    </>
  );
}
