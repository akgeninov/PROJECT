import React from "react";
import Marquee from "react-fast-marquee";
import carouselComunityPic from './../../../../constants/carouselComunityPic';

const dataImg = [
    carouselComunityPic.carouselComunityPic01,
    carouselComunityPic.carouselComunityPic02,
    carouselComunityPic.carouselComunityPic03,
    carouselComunityPic.carouselComunityPic04,
    carouselComunityPic.carouselComunityPic05,
    carouselComunityPic.carouselComunityPic06,
    carouselComunityPic.carouselComunityPic07,
    carouselComunityPic.carouselComunityPic08,
    carouselComunityPic.carouselComunityPic09,
    carouselComunityPic.carouselComunityPic10,
    carouselComunityPic.carouselComunityPic11,
    carouselComunityPic.carouselComunityPic12,
  ];

function carouselComunity() {
  return (
    <div className="absolute z-0 w-full">
      <Marquee direction="right" play="true" className="brightness-[0.2] mb-[70px]">
        {dataImg?.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] mr-[240px] rounded-lg object-cover "
              alt="client1"
            />
          </div>
        ))}
      </Marquee>
      <Marquee  className="brightness-[0.2]">
        {dataImg?.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] mr-[240px] rounded-lg object-cover"
              alt="client1"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default carouselComunity;
