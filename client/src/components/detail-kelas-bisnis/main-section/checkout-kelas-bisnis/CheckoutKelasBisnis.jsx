import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { icon } from "../../../../constants";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import ButtonBlack500 from "../../../global-component/button/button-black500/ButtonBlack500";
import { api } from "../../../../api/api";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function CheckoutKelasBisnis({ dataDetail }) {
  const [star, setStar] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [check, setCheck] = useState([]);
  const [status, setStatus] = useState();
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("auth"));
  const addWishlist = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/changeWishlistBool`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setWishlist(response.data.data);
      setStatus(response.data.data.isRemove);
    } catch (error) {
      console.log(error);
    }
  };

  const checkStatusWishlist = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/wishlist-status`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCheck(response.data.data);
      setStatus(response.data.data.isRemove);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("wishlist", wishlist.isRemove);
  // console.log(check.isRemove);
  // console.log(status);

  useEffect(() => {
    setStar(Number(dataDetail?.kelas_bisni?.total_nilai));
    checkStatusWishlist();
  }, [dataDetail]);
  // const { title } = useParams();
  return (
    <div className="p-[20px] flex flex-col items-start rounded-[10px] shadow-customSm">
      <h1 className="text-[22px] font-bold leading-[32px] w-[288px]">
        {dataDetail?.kelas_bisni?.nama
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ") ?? "no data"}
      </h1>
      <div className=" mt-[16px] flex justify-start items-center ">
        <div className="w-fit grid grid-cols-2 gap-x-[10px] gap-y-[8px] ">
          <div className=" w-max flex items-center  gap-1">
            <img
              src={icon.bookOpenSold}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              Materi Eksklusif
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img src={icon.signal} alt="bok" className="w-[16px] h-[16px]" />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              {dataDetail?.kelas_bisni?.kelas_level?.nama ?? "no data"}
            </p>
          </div>
          <div className=" w-max flex items-center gap-1 ">
            <img
              src={icon.userCircle}
              alt="bok"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-light leading-[20px] shrink-0">
              {dataDetail?.kelas_bisni?.jumlah_pendaftar ?? "no data"}
              <span className="ml-[5px]">Pendaftar</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center  mt-[20px] gap-[8px]">
        <div className="rating rating-sm rating-half gap-0">
          {star === Number(0) ? (
            <>
              <input
                type="radio"
                name={`rating-1`}
                className="rating-hidden"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
              />
            </>
          ) : (
            <>
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 1}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 2}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 3}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 4}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 5}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 6}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 7}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 8}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-1"
                defaultChecked={star * 2 === 9}
              />
              <input
                type="radio"
                name={`rating-1`}
                className="bg-green-500 mask mask-star-2 mask-half-2"
                defaultChecked={star * 2 === 10}
              />
            </>
          )}
        </div>
        <div className="flex items-center justify-center mt-1">
          <p className="text-[14px] font-light leading-[20px]">
            {dataDetail?.kelas_bisni?.total_nilai || "0"}
          </p>
        </div>
      </div>
      <div className="mt-[40px] flex flex-col gap-[12px]">
        <h1 className="text-[16px] font-medium leading-[24px]">Total Harga</h1>
        <div className=" flex flex-col items-start gap-[8px]">
          {/* {el.discount ? ( */}
          <div className="w-full flex justify-start gap-[2px]">
            <p className="text-[14px] font-light leading-[20px] line-through">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(dataDetail?.kelas_bisni?.harga ?? 0)}
            </p>
            <p className="text-[14px] font-medium leading-[20px] text-[#BA0000]">
              100%
            </p>
          </div>
          {/* ) : null} */}
          <p className="text-[24px] font-bold leading-[36px] text-black500">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(
              dataDetail?.kelas_bisni?.harga -
                (dataDetail?.kelas_bisni?.harga * 100) / 100
            )}
          </p>
        </div>
      </div>
      <div className="mt-[40px] gap-[16px] flex ">
        <button
          onClick={() => (user ? addWishlist() : navigate("/login"))}
          className="w-[56px] h-[56px] flex justify-center items-center border-[1px] border-black500 hover:bg-whiteSmoke600 rounded-[10px]"
        >
          {status === false ? (
            <HiHeart className="text-[32px] text-black500" />
          ) : (
            <HiOutlineHeart className="text-[32px] text-black500" />
          )}
        </button>
        <div
          onClick={() => (user ? navigate("/checkout") : navigate("/login"))}
        >
          <ButtonBlack500 TEXT_BUTTON={"Daftar Sekarang"} WIDTH={"w-[216px]"} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutKelasBisnis;
