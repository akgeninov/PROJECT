import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { requestSchema } from "../lib/requestSchema";
import Swal from "sweetalert2";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function MainSection() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/user/request-reset`,
        {
          email: data.EMAIL,
        }
      );
      console.log(response);
      //   dispatch(setToken(response.data.token));
      //   dispatch(setUser(response.data.data));
      //   localStorage.setItem("auth", JSON.stringify(response.data.token));
      //   localStorage.setItem(
      //     "verified",
      //     JSON.stringify(response.data.data.verified)
      //   );
      reset();
      Swal.fire({
        title: "Request sended!",
        text: " Cek email anda!",
        icon: "success",
        confirmButtonColor: "#0F1011",
      });
    } catch (error) {
      Swal.fire({
        title: "Request failed!",
        text: " Ada yang salah, coba lagi!",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    } finally {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-[32px] text-center font-medium leading-[72px] mt-[109px]">
          Send request
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-[70px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[52px] w-[208px] md:w-[538px] "
          >
            <div>
              <input
                {...register("EMAIL")}
                autoFocus
                type="text"
                placeholder="Email"
                className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
              />

              {errors.EMAIL && (
                <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.EMAIL.message}`}</p>
              )}
            </div>

            <div className={`flex justify-center items-center mt-[49px]`}>
              <button
                disabled={isSubmitting ? true : false}
                type="submit"
                className={` flex  mx-[5px] sm:mx-0 w-[160px] px-[64px] py-[16px] justify-center items-center bg-black500 disabled:bg-whiteSmoke600 hover:bg-whiteSmoke800 rounded-[10px]`}
              >
                <p className="text-whiteSmoke500 shrink-0 font-medium text-[16px] leading-[24px]">
                  Masuk
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
