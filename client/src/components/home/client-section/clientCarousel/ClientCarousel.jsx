import React from "react";
import Marquee from "react-fast-marquee";
import { clientPic } from "../../../../constants";

const dataImg = [
  clientPic.risaRareBeauty1,
  clientPic.sasiifood,
  clientPic.teamDominatus1,
  clientPic.yesaMalika1,
  clientPic.sasiifood,
  clientPic.teamDominatus1,
];

function ClientCarousel() {
  return (
    <>
      <Marquee gradient>
        {dataImg?.map((pic) => (
          <div>
            <img src={pic} className="w-[240px] h-[180px]" alt="client1" />
          </div>
        ))}
      </Marquee>
    </>
  );
}

export default ClientCarousel;
