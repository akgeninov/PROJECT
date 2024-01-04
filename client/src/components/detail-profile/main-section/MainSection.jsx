import React from "react";
import { images } from "../../../constants";
import { editSchema } from "./lib/editSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function MainSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(editSchema),
  });

  const onSubmit = async (data) => {
    console.log({ isSubmitting });
    try {
      console.log({ data });
      //   const response = await api.post(
      //     `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
      //     {
      //       nama_lengkap: data.NAMA_LENGKAP,
      //       username: data.USERNAME,
      //       no_hp: data.HANDPHONE,
      //       email: data.EMAIL,
      //       password: data.PASSWORD,
      //       konfirm_password: data.CONFIRM_PASSWORD,
      //     }
      //   );
      //   console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="w-full  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[32px] font-bold leading-[72px]">Detail Profile</h1>
        <div className="relative flex gap-1 mb-[27px]">
          <h1 className="text-black400 font-medium leading-[30px]">
            Foto Profil
          </h1>
          <p className="text-red-600">*</p>
        </div>
        <div className="flex items-center gap-[30px] mb-[51px] ">
          <div className="w-[178px] h-[178px] rounded-full border-[1px]">
            <img
              src={images.avatar2}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="p-[10px] rounded-[10px] border-[1px] border-whiteSmoke700 ">
            <p className="text-[18px] font-medium leading-[28px]">
              Unggah Foto
            </p>
          </button>
        </div>
        <div className="flex gap-[26px] mb-[39px] ">
          <div className="flex flex-col ">
            <label
              htmlFor="namadepan"
              className="text-[24px] font-medium leading-[30px] text-black400 mb-[39px]"
            >
              Nama Depan <span className="text-red-600">*</span>
            </label>
            <input
              {...register("NAMA_DEPAN")}
              id="namadepan"
              type="text"
              className="border-[1px] text-[24px] p-1 border-black400 w-[324px] h-[57px] bg-transparent focus:outline-none rounded-[10px] "
            />
            {errors.NAMA_DEPAN && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.NAMA_DEPAN.message}`}</p>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="namabelakang"
              className="text-[24px] font-medium leading-[30px] text-black400 mb-[39px]"
            >
              Nama Belakang <span className="text-red-600">*</span>
            </label>
            <input
              {...register("NAMA_BELAKANG")}
              id="namabelakang"
              type="text"
              className="border-[1px] text-[24px] p-1 border-black400 w-[324px] h-[57px] bg-transparent focus:outline-none rounded-[10px] "
            />
            {errors.NAMA_BELAKANG && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.NAMA_BELAKANG.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-[36px] ">
          <div className="flex flex-col ">
            <label
              htmlFor="username"
              className="text-[24px] font-medium leading-[30px] text-black400 mb-[39px]"
            >
              Username <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-2">
              <p className="text-[24px] font-medium leading-[30px] text-black400">
                https://growlab.com/profile/
              </p>
              <input
                {...register("USERNAME")}
                id="username"
                type="text"
                className="border-[1px] text-[24px] p-1 border-black400 w-[324px] bg-transparent h-[57px] focus:outline-none rounded-[10px]"
              />
            </div>
            {errors.USERNAME && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.USERNAME.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex mb-[39px] ">
          <div className="flex flex-col ">
            <label
              htmlFor="alamatemail"
              className="text-[24px] font-medium leading-[30px] text-black400 mb-[39px]"
            >
              Alamat Email <span className="text-red-600">*</span>
            </label>
            <input
              {...register("EMAIL")}
              id="alamatemail"
              type="text"
              className="border-[1px] text-[24px] p-1 border-black400 w-[324px] h-[57px] bg-transparent focus:outline-none rounded-[10px]"
            />
            {errors.EMAIL && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.EMAIL.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex mb-[58px] w-full ">
          <div className="flex flex-col  w-full">
            <label
              htmlFor="bio"
              className="text-[24px] font-medium leading-[30px] text-black400 mb-[39px]"
            >
              Biodata <span className="text-red-600">*</span>
            </label>
            <textarea
              {...register("BIODATA")}
              id="bio"
              className="w-full h-[218px] bg-transparent focus:outline-none rounded-[10px] border-[1px] border-black400"
            />
            {errors.BIODATA && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.BIODATA.message}`}</p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-end mb-[80px]">
          <button
            type="submit"
            className="p-[10px] w-[123px] flex justify-center bg-black500 rounded-[10px]"
          >
            <p className="text-[18px] text-center  font-medium leading-[28px] text-white shrink-0">
              Simpan
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainSection;
