import React from "react";

export default function BenefitCard({ benefits }){
    return (
        <div className="relative flex w-full md:w-[252px] h-fit md:h-[400px] shrink-0 rounded-[10px] shadow-customSm items-center p-5 ">
             <img src={benefits.pic} alt="" />
             <div>
              <p className="w-fit text-[18px] font-bold leading-[32px] mb-[10px] text-black">{benefits.title}</p>
              <p className="w-fit text-[16px] leading-[32px] mb-[10px] text-black500 ">{benefits.deskripsi}</p>
             </div>
             
        </div>
      );
}