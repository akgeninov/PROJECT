import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "./lib/changePassword";
import { api } from "../../api/api";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function MainSection() {
  const [showLama, setShowLama] = useState(false);
  const [showBaru, setShowBaru] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data) => {
    console.log({ data });
    const token = JSON.parse(localStorage.getItem("auth"));

    try {
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/user/change-password`,
        {
          password: data.PASSWORD,
          confirm_password: data.CONFIRM_PASSWORD,
          old_password: data.OLD_PASSWORD,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.error || "something when wrong!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    }
  };

  return (
    <div className="w-full  min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[10px]">
          <h1 className="text-[32px] font-bold leading-[72px]">
            Ubah Password
          </h1>
        </div>
        <div className="gap-[20px] flex flex-col mb-[26px]">
          <label
            htmlFor="passwordlama"
            className="text-[24px] text-black400 font-medium leading-[30px]"
          >
            Password Lama <span className="text-red-600">*</span>
          </label>
          <div className="relative w-full lg:w-[324px] flex items-center">
            <button
              onClick={() => setShowLama((prev) => !prev)}
              className="absolute right-2 bg-whiteSmoke500 w-[50px] py-1 flex justify-center items-center"
            >
              {showLama ? (
                <FaRegEyeSlash className="text-[20px]" />
              ) : (
                <FaRegEye className="text-[20px]" />
              )}
            </button>
            <input
              {...register("OLD_PASSWORD")}
              autoFocus
              id="passwordlama"
              type={showLama ? "text" : "password"}
              className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
            />
          </div>

          {errors.PASSWORD && (
            <p className=" text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.OLD_PASSWORD.message}`}</p>
          )}
        </div>
        <div className="gap-[20px] flex flex-col mb-[26px]">
          <label
            htmlFor="passwordbaru"
            className="text-[24px] text-black400 font-medium leading-[30px]"
          >
            Password Baru <span className="text-red-600">*</span>
          </label>
          <div className="relative w-full lg:w-[324px] flex items-center">
            <button
              onClick={() => setShowBaru((prev) => !prev)}
              className="absolute right-2 bg-whiteSmoke500 w-[50px] py-1 flex justify-center items-center"
            >
              {showBaru ? (
                <FaRegEyeSlash className="text-[20px]" />
              ) : (
                <FaRegEye className="text-[20px]" />
              )}
            </button>
            <input
              {...register("PASSWORD")}
              id="passwordbaru"
              type={showBaru ? "text" : "password"}
              className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
            />
          </div>

          {errors.PASSWORD && (
            <p className=" text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
          )}
        </div>
        <div className="gap-[20px] flex flex-col mb-[26px]">
          <label
            htmlFor="confrimpassword"
            className="text-[24px] text-black400 font-medium leading-[30px]"
          >
            Confirm Password <span className="text-red-600">*</span>
          </label>
          <div className="relative w-full lg:w-[324px] flex items-center">
            <button
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute right-2 bg-whiteSmoke500 w-[50px] py-1 flex justify-center items-center"
            >
              {showConfirm ? (
                <FaRegEyeSlash className="text-[20px]" />
              ) : (
                <FaRegEye className="text-[20px]" />
              )}
            </button>
            <input
              {...register("CONFIRM_PASSWORD")}
              id="confrimpassword"
              type={showConfirm ? "text" : "password"}
              className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
            />
          </div>

          {errors.CONFIRM_PASSWORD && (
            <p className=" text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.CONFIRM_PASSWORD.message}`}</p>
          )}
        </div>
        <div className="w-full flex justify-end items-center mb-[200px]">
          <button
            type="submit"
            className="w-[123px] bg-black500 rounded-[10px] p-[10px]"
          >
            <p className="text-white text-[18px] font-medium leading-[28px]">
              Simpan
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainSection;
