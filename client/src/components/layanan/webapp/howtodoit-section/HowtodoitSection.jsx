import { useEffect } from "react";
import { icon } from "../../../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const HowtodoitSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const works = [
    {
      title: "Research",
      deskripsi:
        "Kami memulai dengan mendengarkan kebutuhan unik Anda. Analisis mendalam terhadap target audiens dan tujuan bisnis memandu perencanaan kami. Rencana ini menjadi dasar strategi desain yang akan memberikan pengalaman pengguna yang luar biasa.",
      pic: icon.puzzle,
      num: 1,
    },
    {
      title: "Designing",
      deskripsi:
        "Dengan perencanaan sebagai landasan, kami merancang antarmuka yang estetis dan intuitif. Setiap elemen dipertimbangkan dengan cermat untuk memastikan keindahan dan fungsionalitas optimal. Desain kami bukan hanya sekedar visual, tetapi juga menceritakan cerita yang kuat melalui penggunaan UX writing yang tepat.",
      pic: icon.design,
      num: 2,
    },
    {
      title: "Development",
      deskripsi:
        "Tim pengembangan kami mengambil alih, menghidupkan desain menjadi kenyataan. Proses ini melibatkan pengodean yang presisi dan fokus pada kinerja. Kami memastikan setiap fitur berfungsi mulus dan memberikan pengalaman pengguna yang responsif dan efisien.",
      pic: icon.code,
      num: 3,
    },
    {
      title: "Maintenance",
      deskripsi:
        "Kami berkomitmen untuk menjaga performa optimal. Pemeliharaan berkala dan pembaruan teknologi terbaru memastikan bahwa website atau aplikasi Anda selalu siap beradaptasi dengan perubahan. Tim kami tetap siaga untuk memastikan kesinambungan kesuksesan proyek Anda.",
      pic: icon.gear,
      num: 4,
    },
  ];
  return (
    <div className="mt-[60px] lg:mt-[160px] flex flex-col items-center max-w-[1080px] px-4">
      <div className="flex flex-col gap-8 lg:gap-[52px]">
        <div className="flex justify-center max-w-[1080px]">
          <h1
            className="font-heebo font-bold text-[22px] leading-[32px] lg:text-[40px] lg:leading-[60px] text-center lg:w-[564px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Bagaimana Cara Kami Melakukannya?
          </h1>
        </div>

        <div className="flex flex-col">
          {works.map((work, id) => {
            return (
              <div className="flex group" tabIndex={"0"} key={id}>
                <div className={`${id === 0 ? "mt-6" : ""} flex flex-col mr-6`}>
                  <div key={id} className="flex flex-col items-center">
                    <h2 className="text-[22px] font-medium text-[#d9d9d9] group-focus:text-black">
                      0{work.num}
                    </h2>
                    {id === 3 ? (
                      <></>
                    ) : (
                      <>
                        <span className="h-[300px] lg:h-[160px] w-1 bg-[#d9d9d9] group-focus:bg-gradient-to-b group-focus:from-black group-focus:from-[180px] lg:group-focus:from-[96px] group-focus:to-[#d9d9d9] group-focus:to-[120px] lg:group-focus:to-[64px]"></span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={`opacity-40 group-focus:opacity-100 flex flex-col lg:flex-row justify-center max-w-[1024px] shadow-customSm p-4 lg:p-6 mb-5 lg:mb-8 cursor-pointer`}
                >
                  <img
                    src={work.pic}
                    alt={work.title}
                    className="mr-6 h-[54px] w-[54px] lg:w-[120px] lg:h-[120px]"
                  />
                  <div className="flex flex-col">
                    <h1 className="mb-4 font-heebo text-base mt-4 lg:mt-0 lg:text-[22px] font-bold">
                      {work.title}
                    </h1>
                    <p className="font-heebo font-light text-sm lg:text-base ">
                      {work.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="flex">
          <div className="mt-6 mr-6">
            {works.map((work, id) => {
              return (
                <div
                  for={work.title}
                  key={id}
                  className="flex flex-col items-center"
                >
                  <h2 className="text-[22px] font-medium text-[#d9d9d9] hover:text-black">
                    0{work.num}
                  </h2>
                  {id === 3 ? (
                    <></>
                  ) : (
                    <>
                      <span className="h-[160px] w-1 bg-[#d9d9d9] hover:bg-gradient-to-b hover:from-black hover:from-50% hover:to-[#d9d9d9] hover:to-50%"></span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            {works.map((work, id) => {
              return (
                <div
                  key={id}
                  id={work.title}
                  className="opacity-40 hover:opacity-100  flex justify-center w-[1024px] shadow-customSm p-6 mb-8 cursor-pointer"
                >
                  <img src={work.pic} alt={work.title} className="mr-6" />
                  <div className="flex flex-col">
                    <h1 className="mb-4 font-heebo text-[22px] font-bold">
                      {work.title}
                    </h1>
                    <p className="font-heebo font-light leading-6">
                      {work.deskripsi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowtodoitSection;
