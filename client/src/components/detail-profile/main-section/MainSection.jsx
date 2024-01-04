import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { images } from "../../../constants";
import { editSchema } from "./lib/editSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../api/api";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../../lib/redux-toolkit/feature/user/userSlice";

function MainSection() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [userImage, setUserImage] = useState(null);
  const fileInput = useRef();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(editSchema),
  });

  const unggahFoto = () => {
    console.log(fileInput);
    fileInput.current.click();
    // fileInput.current.value = null;
  };

  const getUserData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      const response = await api.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.nama_lengkap &&
        response.data.data.email
      ) {
        dispatch(setUser(response.data.data));
        const namaDepan =
          response.data.data.nama_depan ||
          response.data.data.nama_lengkap.split(" ")[0];
        const namaBelakang =
          response.data.data.nama_belakang ||
          response.data.data.nama_lengkap.split(" ").slice(1).join(" ");

        setValue("NAMA_DEPAN", namaDepan || "");
        setValue("NAMA_BELAKANG", namaBelakang);
        setValue("USERNAME", response.data.data.username || "");
        setValue("EMAIL", response.data.data.email);
        setValue("BIODATA", response.data.data.biografi || "");
        console.log(response);
        setUserImage(
          `${process.env.REACT_APP_SERVER_URL}images/user/${response.data.data.profile_picture}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        // Set the data URL to a state or directly use it where needed
        const imageDataUrl = event.target.result;
        setUserImage(imageDataUrl);
        console.log("Image Data URL:", imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    console.log({ isSubmitting });
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Data anda akan diubah secara permanent!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F1011",
      cancelButtonColor: "#d33",
      cancelButtonText: "Batal!",
      confirmButtonText: "Ya!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append("file", data.IMAGE);
        formData.append("nama_depan", data.NAMA_DEPAN);
        formData.append("nama_belakang", data.NAMA_BELAKANG);
        formData.append("username", data.USERNAME);
        formData.append("email", data.EMAIL);
        formData.append("biodata", data.BIODATA);
        console.log({ data });
        const token = JSON.parse(localStorage.getItem("auth"));
        try {
          const response = await api.put(
            `${process.env.REACT_APP_API_BASE_URL}/user/update`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: token,
              },
            }
          );
          getUserData();
          console.log(response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Data anda berhasil di ubah",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

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
          <div className="w-[178px] h-[178px] rounded-full border-[1px] overflow-hidden">
            <img
              src={userImage || images.avatar2}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <Controller
            name="IMAGE"
            control={control}
            render={({ field }) => (
              <>
                <input
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);
                    handleFileChange(e);
                  }}
                  type="file"
                  hidden
                  ref={fileInput}
                />
              </>
            )}
          />
          {/* <input
            {...register("IMG")}
            onChange={(e) => console.log(e.target.files)}
            type="file"
            hidden
            ref={fileInput}
          /> */}
          <div className="flex flex-col items-start">
            <button
              type="button"
              onClick={() => unggahFoto()}
              className="p-[10px] rounded-[10px] border-[1px] border-whiteSmoke700 "
            >
              <p className="text-[18px] font-medium leading-[28px]">
                Unggah Foto
              </p>
            </button>
            {errors.IMAGE && (
              <p className="mt-[10px] text-red-500 text-[12px] md:text-[18px] font-medium leading-[24px]">{`${errors.IMAGE.message}`}</p>
            )}
          </div>
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
              readOnly
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
            {/* <textarea value={text} disabled /> */}
          </div>
        </div>
        <div className="w-full flex justify-end mb-[80px]">
          <button
            disabled={isSubmitting ? true : false}
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
