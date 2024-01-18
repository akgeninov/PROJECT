import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";

function MainSection() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("loading");
  const { verif } = useParams();

  const timeoutRef = useRef(null);

  const verifikasiUser = async () => {
    if (verif) {
      setIsLoading(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setText(
        "jangan tutup atau refresh halaman, kami sedang memproses verifikasi akun anda!"
      );
      timeoutRef.current = setTimeout(async () => {
        try {
          const response = await api.put(
            `${process.env.REACT_APP_API_BASE_URL}/user/verif/${verif}`
          );
          console.log(response);

          setText("Verifikasi selesai!");
        } catch (error) {
          console.log(error);
          setText("Verifikasi gagal, coba lagi atau request link sekali lagi!");
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    verifikasiUser();
  }, [verif]);
  useEffect(() => {
    console.log({ isLoading });
  }, [isLoading]);

  return (
    <div className="flex  h-full min-h-screen flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <div className="w-full flex justify-center items-center">
        {!isLoading ? (
          <p className="text-[24px] text-center">{text}</p>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <Spinner size="xl" />
            <p className="text-[24px] text-center">{text}</p>
          </div>
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-[123px] bg-black500 rounded-[10px] p-[10px]"
      >
        <p className="text-white text-[18px] font-medium leading-[28px]">
          back to home
        </p>
      </button>
    </div>
  );
}

export default MainSection;
