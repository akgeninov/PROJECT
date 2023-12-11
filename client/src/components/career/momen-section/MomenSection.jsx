import React from "react";
import { images } from "../../../constants";

const imageRectangle = {
    width: '700px',
};

function MomenSection() {
    return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[160px] px-[10px] lg:px-0 w-full lg:w-[1050px] gap-[52px]">
        <h1 className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] text-center">
            Pastinya ada banyak momen menarik bersama kami
        </h1>
        <div class="grid grid-cols-1 divide-y lg:h-[800px]" >
            <div>
                <div class="grid grid-cols-2 divide-x lg:h-[350px]" >
                    <div className="border-none" style={imageRectangle}><img src={images.career_momen1} alt="Career Momen 1" style={{ width: '693px', height: '337px' }}/></div>
                    <div className="border-none"><img src={images.career_momen2} alt="Career Momen 2" style={{ width: '337px', height: '337px', marginLeft: '188px' }}/></div>
                </div>
            </div>
            <div className="border-none">
                <div class="grid grid-cols-3 divide-x" style={{paddingBottom: '100px'}}>
                    <div className="border-none"><img src={images.career_momen3} alt="Career Momen 3" style={{ width: '337px', height: '337px' }}/></div>
                    <div className="border-none"><img src={images.career_momen4} alt="Career Momen 4" style={{ width: '337px', height: '337px', marginLeft: '7px' }}/></div>
                    <div className="border-none"><img src={images.career_momen5} alt="Career Momen 5" style={{ width: '337px', height: '337px', marginLeft: '13px' }}/></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default MomenSection;
