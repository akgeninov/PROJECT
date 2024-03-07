import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from './cards/Cards'
import Number from './numbers/Number'
import Numbers from "./numbers/Numbers";

const dataCards=[
  {
      title: "Research",
      description: "Kami memulai dengan mendengarkan kebutuhan unik Anda. Analisis mendalam terhadap target audiens dan tujuan bisnis memandu perencanaan kami. Rencana ini menjadi dasar strategi desain yang akan memberikan pengalaman pengguna yang luar biasa."
  },
  {
      title: "Designing",
      description: "Dengan perencanaan sebagai landasan, kami merancang antarmuka yang estetis dan intuitif. Setiap elemen dipertimbangkan dengan cermat untuk memastikan keindahan dan fungsionalitas optimal. Desain kami bukan hanya sekedar visual, tetapi juga menceritakan cerita yang kuat melalui penggunaan UX writing yang tepat."
  },  
  {
      title: "Development",
      description: "Tim pengembangan kami mengambil alih, menghidupkan desain menjadi kenyataan. Proses ini melibatkan pengodean yang presisi dan fokus pada kinerja. Kami memastikan setiap fitur berfungsi mulus dan memberikan pengalaman pengguna yang responsif dan efisien."
  },
  {
      title: "Maintenance",
      description: "Kami berkomitmen untuk menjaga performa optimal. Pemeliharaan berkala dan pembaruan teknologi terbaru memastikan bahwa website atau aplikasi Anda selalu siap beradaptasi dengan perubahan. Tim kami tetap siaga untuk memastikan kesinambungan kesuksesan proyek Anda."
  },
];

function HowWeDo() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className= "flex flex-col justify-start items-center mt-[60px] lg:mt-[10px] px-[10px] lg:px-0 lg:w-[900px] gap-[52px] w-screen">
            <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[22px] lg:text-[40px] w-[208px] lg:w-auto  font-bold leading-[32px] lg:leading-[60px] text-black500 text-center"
                    >
                    Bagaimana Cara Kami <br/>
                    Melakukannya?
            </h1>
        <div className=" flex flex-row justify-center shrink-0 gap-x-10 w-full">
            <Numbers dataCards={dataCards} onHover={handleHover}/>
            <Cards dataCards={dataCards} onHover={handleHover} isHovered={isHovered}/>
        </div>
    </div>
  )
}

export default HowWeDo