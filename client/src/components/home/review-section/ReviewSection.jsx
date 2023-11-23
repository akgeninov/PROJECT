import React, { useEffect, useState } from "react";
import { icon, images, reviewPic } from "../../../constants";
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
    <div className=" hidden xl:flex flex-col items-center mt-[160px] max-w-[952px] gap-[52px]">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-[564px] text-black500 text-[40px] font-bold leading-[60px] text-center"
      >
        Pendapat Mereka Tentang Growlab
      </p>
      <div className="w-full gap-[24px] flex">
        <div className="w-full gap-[24px] p-[24px] flex shadow-customSm rounded-[10px]">
          <img
            src={dataMessenger[currentIndex].bigPic}
            alt="mesengger"
            className=" w-[384px] h-[288px] rounded-[10px] "
          />

          <div className="w-full ">
            <div className="gap-[8px]">
              <p className="text-[22px] font-bold leading-[32px]">
                {dataMessenger[currentIndex].nama}
              </p>
              <p className="text-[16px] font-medium leading-[24px] text-indigoDye500">
                {dataMessenger[currentIndex].perushaaan}
              </p>
            </div>
            <div className="relative mt-[52px]">
              <p className="absolute -top-[40px] text-[70px] font-bold leading-[72px]  opacity-[0.25] text-black500">
                "
              </p>
              <p className="text-[16px] font-light leading-[24px] ">
                {dataMessenger[currentIndex].deskripsi}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit gap-[16px]">
          {dataMessenger.map((data, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative w-[60px] h-[60px] cursor-pointer"
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
                  className="w-[44px] h-[44px] rounded-[4px]"
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
