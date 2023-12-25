import React, { useState } from "react";
import { images } from "../../../constants";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "./lib/signupSchema";

function MainSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  // const password = watch("PASSWORD");
  // const confirmPassword = watch("CONFIRM_PASSWORD");

  const [isHide, setIsHide] = useState(true);

  const onSubmit = async (data) => {
    console.log({ isSubmitting });
    try {
      console.log({ data });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <h1 className="text-[32px] text-center font-medium leading-[72px] mt-[109px]">
        Daftar Akun
      </h1>
      <div className="w-full flex flex-col justify-center items-center mt-[70px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[52px] w-[208px] md:w-[538px] "
        >
          <div className="w-full">
            <input
              autoFocus
              {...register("NAMA_LENGKAP")}
              type="text"
              placeholder="Nama Lengkap"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.NAMA_LENGKAP && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.NAMA_LENGKAP.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("USERNAME")}
              type="text"
              placeholder="Username"
              className="outline-none w-full h-[50px]  bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.USERNAME && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.USERNAME.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <div className="w-full flex items-center gap-[25px] text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black">
              <div className="w-[42px] h-[40px]  flex justify-center items-center bg-whiteSmoke600 rounded-[10px]">
                <p className="text-[16px] font-medium leading-[24px] ">+62</p>
              </div>
              <input
                {...register("HANDPHONE")}
                type="number"
                placeholder="No. handphone"
                className="outline-none w-full h-[50px] bg-transparent "
              />
            </div>
            {errors.HANDPHONE && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.HANDPHONE.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("EMAIL")}
              type="email"
              placeholder="Email"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            {errors.EMAIL && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.EMAIL.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <div className="relative">
              <input
                {...register("PASSWORD")}
                type="password"
                placeholder="Password"
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {/* <button
              onClick={() => setIsHide((prev) => !prev)}
              type="button"
              className="absolute right-2 h-[50px]  "
            ></button> */}
            </div>
            {errors.PASSWORD && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.PASSWORD.message}`}</p>
            )}
          </div>
          <div className="w-full">
            <div className="relative">
              <input
                {...register("CONFIRM_PASSWORD")}
                type="password"
                placeholder="Confirm Password"
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />
              {/* <button
              onClick={() => setIsHide((prev) => !prev)}
              type="button"
              className="absolute right-2 h-[50px]  "
            ></button> */}
            </div>
            {errors.CONFIRM_PASSWORD && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.CONFIRM_PASSWORD.message}`}</p>
            )}
            {console.log(errors)}
          </div>
          <div className="flex justify-center items-center mt-[36px]">
            <ButtonBlack500 TEXT_BUTTON={"Masuk"} WIDTH={"w-[160px]"} />
          </div>
        </form>

        <div className=" flex justify-center items-center gap-[8px] w-full mt-[48px]">
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
          <p className="w-[108px] md:w-[161px] text-[12px] md:text-[18px] font-medium leading-[24px] shrink-0">
            Atau masuk dengan
          </p>
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
        </div>

        <div className="w-[208px] md:w-[538px] mb-[76px]">
          <button className="flex justify-center items-center h-[64px] w-full bg-whiteSmoke600 rounded-[10px] mt-[48px] gap-[10px]">
            <img
              src={images.googleIcon}
              alt="google"
              className="w-[32px] h-[32px] object-cover"
            />
            <p className="text-[16px] font-medium leading-[24px]">Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
