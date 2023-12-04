import React from "react";
import { images } from "../../../constants";

function MainImages() {
  return (
    <div className="flex max-w-[358px] md:max-w-[1080px]  w-full md:h-[540px] px-[5px] xl:p-0  justify-center items-center mt-[32px] md:mt-[52px]">
      <img
        src={images.tiktokImages}
        alt="main images"
        className="w-full rounded-[10px]"
      />
    </div>
  );
}

export default MainImages;
