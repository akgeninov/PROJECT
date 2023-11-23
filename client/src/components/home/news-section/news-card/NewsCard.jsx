import React from "react";

function NewsCard({ news, onHover, setOnHover, index }) {
  return (
    <div
      key={index}
      onMouseEnter={() => setOnHover(news.title)}
      onMouseLeave={() => setOnHover("")}
      className="relative w-[344px] h-[524px] shrink-0 rounded-[10px] cursor-pointer shadow-customSm"
    >
      <div
        className={`${
          onHover === news.title
            ? "bg-black bg-opacity-50"
            : "bg-black bg-opacity-0"
        } absolute top-0 left-0 w-full h-full rounded-[10px] z-20`}
      ></div>
      <img src={news.pic} alt="news" className={` relative`} />
      <div className="absolute -translate-y-full w-[344px] h-[244px] rounded-b-[10px] z-30 overflow-hidden">
        <div
          className={`${
            onHover === news.title ? "translate-y-5" : "translate-y-[100px]"
          } absolute   w-full bg-black400 p-[20px]   duration-300 z-40`}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[14px] font-medium leading-[20px] text-whiteSmoke600">
              {news.DATE}
            </p>
            <p className="w-[304px] h-[64px] text-[22px] font-bold leading-[32px] mb-[16px] text-whiteSmoke500 line-clamp-2  ">
              {news.title}
            </p>
          </div>

          <p
            className={`${
              onHover === news.title ? "opacity-100" : "opacity-0"
            } text-[16px] font-light leading-[24px] text-whiteSmoke600 line-clamp-3`}
          >
            {news.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
