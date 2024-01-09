import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "./lib/changePassword";
import { api } from "../../api/api";

function MainSection() {
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
          email: data.EMAIL,
          password: data.PASSWORD,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
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
          <input
            {...register("PASSWORD")}
            autoFocus
            id="passwordlama"
            type="text"
            className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
          />
          {errors.PASSWORD && (
            <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
          )}
        </div>
        <div className="gap-[20px] flex flex-col mb-[26px]">
          <label
            htmlFor="passwordbaru"
            className="text-[24px] text-black400 font-medium leading-[30px]"
          >
            Password Baru <span className="text-red-600">*</span>
          </label>
          <input
            id="passwordbaru"
            type="text"
            className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
          />
          {errors.CONFIRM_PASSWORD && (
            <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.CONFIRM_PASSWORD.message}`}</p>
          )}
        </div>
        <div className="gap-[20px] flex flex-col mb-[26px]">
          <label
            htmlFor="confrimpassword"
            className="text-[24px] text-black400 font-medium leading-[30px]"
          >
            Confirm Password <span className="text-red-600">*</span>
          </label>
          <input
            {...register("CONFIRM_PASSWORD")}
            id="confrimpassword"
            type="text"
            className="border-[1px] text-[12px] lg:text-[24px] p-1 border-black400 w-full lg:w-[324px] h-[36px] lg:h-[57px] bg-transparent focus:outline-none rounded-[10px] "
          />
        </div>
        <div className="w-full flex justify-end items-center">
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
