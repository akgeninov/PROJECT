import { dataLayanan } from "../../../../constants/data";
import ButtonWhiteSmoke500 from "../../../global-component/button/button-whitesmoke500/ButtonWhiteSmoke500";
import NavigasiLayanan from "./navigasi-layanan/NavigasiLayanan";

const HeroSection = () => {
  return (
    <div
      className="bg-cover px-[16px] sm:px-[100px] w-full h-[780px] 2xl:max-w-[1280px] lg:h-[664px] flex flex-col"
      style={{ backgroundImage: `url(${dataLayanan[2].pic})` }}
    >
      <div className="bg-[rgba(15,16,17,0.95)] bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1280px] h-[780px] lg:h-[664px] absolute left-0 z-0"></div>

      <div className="z-10">
        <div className="hidden lg:block mt-[24px] gap-[8px]">
          <NavigasiLayanan />
        </div>

        <div className="flex flex-col lg:flex-row gap-[80px] mt-[60px]">
          <div className="flex flex-col lg:overflow-hidden text-center">
            <div className="flex flex-col max-w-[568px] mb-[52px]">
              <h1 className="text-whiteSmoke500 text-[28px] mb-2 lg:mb-4 lg:text-[48px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
                {dataLayanan[2].title}
              </h1>
              <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke500 text-center lg:text-start">
                Maksimalkan kehadiran online bisnismu! Tim ahli kami siap
                membangun website & aplikasi yang memikat, membantu kamu
                mencapai tujuan digital dengan desain yang responsif dan
                fungsional
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <ButtonWhiteSmoke500
                WIDTH={"w-[260px]"}
                TEXT_BUTTON={"Selengkapnya"}
              />
            </div>
          </div>

          {/* <div className="flex flex-col items-center w-[358px] h-[358px] lg:w-[432px] lg:h-[472px] overflow-hidden rounded-[10px]">
            <img
              src={dataLayanan[2].pic}
              alt="layanan"
              // className={
              //   "flex flex-col w-[358px] h-[358px] lg:w-[432px] lg:h-[472px] rounded-[10px]"
              // }
              className="bg-fill"
            />
          </div> */}

          <img
            src={dataLayanan[2].pic}
            alt="layanan"
            className="w-[358px] h-[358px] lg:w-[432px] lg:h-[472px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
