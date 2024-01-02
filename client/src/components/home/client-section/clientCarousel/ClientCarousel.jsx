import React from "react";
import Marquee from "react-fast-marquee";
import { clientPic, newsPic } from "../../../../constants";

const dataImg = [
  clientPic.risaRareBeautyOri,
  clientPic.sasiifoodOri,
  clientPic.teamDominatusOri,
  clientPic.yesaMalikaOri,
  clientPic.sasiifoodOri,
  newsPic.rectangleNews1,
  clientPic.leironOri,
];

function ClientCarousel() {
  return (
    <>
      <Marquee
        gradient
        gradientColor="#F4F4F4"
        gradientWidth={200}
        autoFill
        className=""
      >
        {dataImg?.map((pic, index) => (
          <img
            key={index}
            src={pic}
            className="object-cover  w-[120px] mx-[12px] sm:w-[240px] h-[90px] sm:h-[180px] rounded-[10px] "
            alt="client1"
          />
        ))}
      </Marquee>
    </>
  );
}

export default ClientCarousel;
