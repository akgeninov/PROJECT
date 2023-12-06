import React from "react";
import Marquee from "react-fast-marquee";
import { clientPic } from "../../../../constants";

const dataImg = [
  clientPic.risaRareBeauty1,
  clientPic.sasiifood,
  clientPic.teamDominatus1,
  clientPic.yesaMalika1,
  clientPic.sasiifood,
  clientPic.teamDominatus1
];

function ClientCarousel() {
  return (
    <>
      <Marquee gradient gradientColor="#F4F4F4">
        {dataImg?.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-[120px] h-[90px] sm:w-[240px] sm:h-[180px]"
              alt="client1"
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}

export default ClientCarousel;
