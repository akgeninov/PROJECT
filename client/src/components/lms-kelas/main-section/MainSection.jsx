import React from "react";

function MainSection() {
  return (
    <div className="flex  flex-col max-w-[358px] md:max-w-[1080px]  w-full px-[5px] xl:px-0 justify-start items-center mt-[52px] ">
      <div className="w-[358px] lg:w-[752px] flex flex-col items-center mt-[32px] gap-[52px]">
        <div className="flex flex-col items-start w-full gap-[8px]">
          <p className="text-[12px] font-light leading-[20px]">
            Pelajaran 3 dari 4
          </p>
          <p className="text-[32px] font-bold leading-[40px]">
            Modul 3: Pembentukan Ide Bisnis Kreatif
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-[52px]">
          {/* <iframe
                      width="560"
                      height="315"
                      src={`${
                        el?.link &&
                        el.link.replace(
                          "youtu.be",
                          "www.youtube-nocookie.com/embed"
                        )
                      }`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-[350px] h-[200px] md:w-[529px] md:h-[356px] rounded-[10px] "
                    ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O6P86uwfdR0?si=Ufw_1OQnO0kSXRvX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full  rounded-[10px] "
          ></iframe>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="px-[48px] py-[16px] flex items-center justify-center bg-black500 rounded-[10px] mb-[52px]">
            <p className="text-[16px] font-medium leading-[24px] text-white">
              Pelajaran Berikutnya
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
