import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../lib/resetPasswordSchema";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";

function MainSection() {
  const [showBaru, setShowBaru] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });
  const onSubmit = async (data) => {
    try {
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/user/reset-password`,
        {
          password: data.PASSWORD,
          token: token,
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "reset password success",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Ada yang salah! atau token kadaluarsa!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    } finally {
      navigate("/login");
    }
  };
  return (
    <div className="flex  h-full min-h-screen flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] font-bold leading-[72px]">Reset Password</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col  justify-center items-center"
        >
          <div className="gap-[20px] w-[300px] flex flex-col mb-[26px]">
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
          <div className="gap-[20px] w-[300px] flex flex-col mb-[26px]">
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
          <div className="w-full flex justify-center items-center">
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
    </div>
  );
}

export default MainSection;
