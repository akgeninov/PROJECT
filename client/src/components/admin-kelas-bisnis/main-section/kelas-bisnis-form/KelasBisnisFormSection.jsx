import { reviewPic, icon } from "../../../../constants";
import { useState, useRef } from "react";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";

function KelasBisnisFormSection() {
  const [materi, setMateri] = useState([
    {
      judul: "",
      linkVideo: "",
      deskripsiVideo: "",
    },
  ]);

  const bannerRef = useRef();
  const pemateriRef = useRef();

  function tambahMateriHandler() {
    setMateri((prevMateri) => {
      const newMateri = prevMateri.map((obj) => {
        return { ...obj };
      });
      return [...newMateri, {}];
    });
  }

  function uploadBannerClickHandler() {
    bannerRef.current.click();
  }

  function uploadFotoPemateriClickHandler() {
    pemateriRef.current.click();
  }

  return (
    <div className="w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="Tambah Kelas Bisnis" />
      <form action="">
        <div className="my-4">
          <p className="font-bold">Nama Kelas Bisnis</p>
          <input
            type="text"
            className="my-2 w-1/2 h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-bold">Tingkat Kesulitan</p>
          <select className="my-2 w-1/4 h-8 px-2 bg-transparent border border-gray-400 rounded-md">
            <option value="option1">Option 1</option>
          </select>
        </div>
        <div className="my-4">
          <p className="font-bold">Harga Kelas</p>
          <div className="flex items-center mt-2 mb-6 w-1/4 h-8 border border-gray-400 rounded-md">
            <span className="mx-2">Rp</span>
            <input
              type="number"
              className="bg-transparent w-full mr-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="my-4">
          <p className="font-bold">Gambar Banner</p>
          <input
            type="file"
            accept="image/*"
            ref={bannerRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={uploadBannerClickHandler}
            className="flex flex-col justify-center aspect-video mt-2 mb-6 px-2 w-1/3 border border-gray-400 rounded-md bg-transparent"
          >
            <img
              src={icon.iconUpload}
              alt="upload"
              className="h-1/6 max-h-6 aspect-w-1 aspect-h-1 border-solid self-end"
            />
            <p className="h-2/3 w-full self-center flex items-center justify-center pb-4">
              upload a picture
            </p>
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Nama Pemateri</p>
          <input
            type="text"
            className="my-2 w-1/2 h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-bold">Foto Pemateri</p>
          <input
            type="file"
            accept="image/*"
            ref={pemateriRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={uploadFotoPemateriClickHandler}
            className="flex flex-col justify-center aspect-square mt-2 mb-6 px-2 w-1/5 border border-gray-400 rounded-md bg-transparent"
          >
            <img
              src={icon.iconUpload}
              alt="upload"
              className="h-1/6 max-h-5 aspect-w-1 aspect-h-1 border-solid self-end"
            />
            <p className="h-2/3 w-full self-center flex items-center justify-center pb-4">
              upload a picture
            </p>
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi Kelas</p>
          <textarea className="resize-none my-2 w-1/2 h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md" />
        </div>
        <p className="font-bold my-4">List Materi</p>
        <div className="my-4">
          <p className="font-bold">Judul Materi</p>
          {materi.map((elmnt, index) => (
            <div
              key={index}
              className="flex items-center my-2 w-1/2 h-8 border border-gray-400 rounded-md"
            >
              <span className="mx-4">{index + 1}.</span>
              <input
                type="text"
                defaultValue={elmnt.judul}
                className="bg-transparent w-full mr-2 focus:outline-none"
              />
            </div>
          ))}
          <button
            onClick={tambahMateriHandler}
            type="button"
            className="flex items-center my-2 w-1/2 h-8 border border-gray-400 rounded-md px-4"
          >
            + <span className="mx-2">Tambah Materi</span>
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Link Video Materi</p>
          {materi.map((elmnt, index) => (
            <div
              key={index}
              className="flex items-center my-2 w-1/2 h-8 border border-gray-400 rounded-md"
            >
              <span className="mx-4">{index + 1}.</span>
              <input
                type="text"
                defaultValue={elmnt.linkVideo}
                className="bg-transparent w-full mr-2 focus:outline-none"
              />
            </div>
          ))}
          <button
            onClick={tambahMateriHandler}
            type="button"
            className="flex items-center my-2 w-1/2 h-8 border border-gray-400 rounded-md px-4"
          >
            + <span className="mx-2">Tambah Materi</span>
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi Video</p>
          {materi.map((elmnt, index) => (
            <div
              key={index}
              className="flex items-start my-2 w-1/2 border border-gray-400 rounded-md"
            >
              <span className="mx-4 my-2">{index + 1}.</span>
              <textarea
                defaultValue={elmnt.deskripsiVideo}
                className="resize-none mr-2 w-full h-24 pr-2 py-2 bg-transparent rounded-md focus:outline-none"
              />
            </div>
          ))}
          <button
            onClick={tambahMateriHandler}
            type="button"
            className="flex items-center my-2 w-1/2 h-8 border border-gray-400 rounded-md px-4"
          >
            + <span className="mx-2">Tambah Materi</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default KelasBisnisFormSection;
