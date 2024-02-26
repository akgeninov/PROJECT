import layananPic from "../../../../constants/layananPic";

const ServiceSection = () => {
  const dataService = [
    {
      title: "UI/UX Design",
      deskripsi:
        "Kami menciptakan design yang sesuai dengan tujuan bisnismu, menarik secara visual, dan mudah untuk digunakan",
      pic: layananPic.uiuxDesign,
    },
    {
      title: "Website Development",
      deskripsi:
        "Kami menciptakan website yang memiliki performa terbaik dan tentunya menghadirkan solusi untuk bisnismu",
      pic: layananPic.websiteDevelopment,
    },
    {
      title: "Mobile Apps Development",
      deskripsi:
        "Kami menciptakan mobile apps yang memiliki performa terbaik dan tentunya menghadirkan solusi untuk bisnismu",
      pic: layananPic.mobileAppDevelopment,
    },
    {
      title: "CMS Website",
      deskripsi:
        "Layanan CMS Website memungkinkan kamu untuk mengelola dan membarui konten website dengan mudah",
      pic: layananPic.cmsWebsite,
    },
  ];
  return (
    <div className="mt-[60px] lg:mt-[160px] w-fit flex flex-col items-center px-4">
      <div className="flex flex-col gap-[32px] lg:gap-[52px]">
        <div className="flex justify-center max-w-[1080px]">
          <h1 className=" font-heebo font-bold text-[22px] lg:text-[40px] leading-[32px] lg:leading-[60px] text-center max-w-[604px] lg:mb-[52px]">
            Kami Selalu Menciptakan Pengalaman Digital yang Terbaik
          </h1>
        </div>

        <div className="max-w-[1080px] flex flex-wrap gap-8 lg:gap-[80px]">
          {dataService.map((item, id) => {
            return (
              <div
                key={id}
                className={`${
                  id % 2 !== 0 ? "md:mt-[80px]" : ""
                } even:ml-[44px] md:even:ml-0`}
              >
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-[314px] h-[412px] lg:h-[524px] lg:w-full"
                />
                <div className="max-w-[348px]">
                  <h1
                    className={`text-[18px] lg:text-[24px] font-bold font-heebo leading-[28px] lg:leading-[36px] mt-4 mb-2 lg:mt-6 lg:mb-4`}
                  >
                    {item.title}
                  </h1>
                  <p className="font-heebo font-light text-base lg:text-lg leading-6 lg:leading-7">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
