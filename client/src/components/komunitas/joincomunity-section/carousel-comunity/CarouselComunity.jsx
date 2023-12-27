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
    <div className="absolute z-0 w-[390px] md:w-full h-[844px] md:h-fit flex flex-row md:flex-col">
      <Marquee direction="right"  play="true" className="brightness-[0.2] md:mb-[70px] ">
        {dataImg?.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-[164px] h-[164px] lg:w-[200px] lg:h-[200px] mb-[200px] md:mb-0 md:mr-[240px] rounded-lg object-cover "
              alt="client1"
            />
          </div>
        ))}
      </Marquee>
      <Marquee play="true" className="brightness-[0.2]">
        {dataImg?.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-[164px] h-[164px] lg:w-[200px] lg:h-[200px] md:mr-[240px] rounded-lg object-cover"
              alt="client1"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default carouselComunity;
