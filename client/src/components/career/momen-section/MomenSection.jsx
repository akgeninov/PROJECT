import React from "react";
import { images } from "../../../constants";


function MomenSection() {
    return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[160px] px-[10px] lg:px-0 w-full lg:w-[900px] gap-[52px]">
        <h1 className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] text-center">
            Pastinya ada banyak momen menarik bersama kami
        </h1>
        <div class="grid grid-cols-1 divide-y">
            <div>
                <div class="grid grid-cols-2 divide-x">
                    <div><img src={images.career_momen1} alt="Career Momen 1" /></div>
                    <div><img src={images.career_momen2} alt="Career Momen 2" /></div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-3 divide-x">
                    <div><img src={images.career_momen1} alt="Career Momen 1" /></div>
                    <div><img src={images.career_momen1} alt="Career Momen 1" /></div>
                    <div><img src={images.career_momen1} alt="Career Momen 1" /></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default MomenSection;
