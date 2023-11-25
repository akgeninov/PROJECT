import React, { useEffect, useState } from "react";
import { icon, reviewPic } from "../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
function ReviewSection() {
  const [dataMessenger, setDataMessenger] = useState([
    {
      nama: "Rangga Prasetya",
      perushaaan: "Founder Coffee Corner",
      deskripsi:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      bigPic: reviewPic.profil1,
      smallPic: reviewPic.profil1,
    },
    {
      nama: "Lorem ipsum",
      perushaaan: "amet consectetur adipisicing elit",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aliquam, excepturi doloremque corporis dolore sed nesciunt, illo esse sequi, libero labore fugiat optio blanditiis delectus! Voluptates, nihil? Illum, enim delectus?",
      bigPic: reviewPic.profil2,
      smallPic: reviewPic.profil2,
    },
    {
      nama: "Lorem ipsum",
      perushaaan: "amet consectetur adipisicing elit",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aliquam, excepturi doloremque corporis dolore sed nesciunt, illo esse sequi, libero labore fugiat optio blanditiis delectus! Voluptates, nihil? Illum, enim delectus?",
      bigPic: reviewPic.profil3,
      smallPic: reviewPic.profil3,
    },
    {
      nama: "Lorem ipsum",
      perushaaan: "amet consectetur adipisicing elit",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aliquam, excepturi doloremque corporis dolore sed nesciunt, illo esse sequi, libero labore fugiat optio blanditiis delectus! Voluptates, nihil? Illum, enim delectus?",
      bigPic: reviewPic.profil4,
      smallPic: reviewPic.profil4,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateStateWithIndex = () => {
    if (currentIndex < dataMessenger.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateStateWithIndex();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, dataMessenger]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" flex flex-col items-center mt-[66px] lg:mt-[160px] px-[16px] xl:px-0 max-w-[952px] gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] text-center"
      >
        Pendapat Mereka Tentang Growlab
      </h1>
      <div className="w-full gap-[24px] flex flex-col lg:flex-row justify-center ">
        <div className="w-full gap-[24px] p-[24px] flex flex-col lg:flex-row items-center shadow-customSm rounded-[10px]">
          <img
            src={dataMessenger[currentIndex].bigPic}
            alt="mesengger"
            className=" w-[326px] h-[260px] lg:w-[384px] lg:h-[288px] rounded-[10px] "
          />

          <div className="w-full ">
            <div className="gap-[8px]">
              <h1 className=" text-[18px]  lg:text-[22px] font-bold leading-[28px] lg:leading-[32px]">
                {dataMessenger[currentIndex].nama}
              </h1>
              <p className=" text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] text-indigoDye500">
                {dataMessenger[currentIndex].perushaaan}
              </p>
            </div>
            <div className="relative mt-[52px]">
              <p className="absolute -top-[40px] text-[32px] lg:text-[70px] font-bold leading-normal lg:leading-[72px]  opacity-[0.25] text-black500">
                "
              </p>
              <p className="text-[14px] lg:text-[16px] font-light leading-[20px] lg:leading-[24px] ">
                {dataMessenger[currentIndex].deskripsi}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-[16px]">
          {dataMessenger.map((data, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]  cursor-pointer"
            >
              <img
                src={icon.vector5}
                alt="icon"
                className={`${
                  currentIndex === index ? "flex" : "hidden"
                } absolute -right-[1px] -top-[1px]`}
              />
              <div className="w-full h-full rounded-[10px] border-[4px] border-whiteSmoke600 flex justify-center items-center">
                <img
                  src={data.smallPic}
                  alt="small-messenger"
                  className="w-[34px] h-[34px] lg:w-[44px] lg:h-[44px] rounded-[4px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
