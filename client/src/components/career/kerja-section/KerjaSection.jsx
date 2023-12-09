import React from "react";
import { images } from "../../../constants";


function KerjaSection() {
    return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] gap-[52px]"  style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
        <h1 className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] lg:mt-[80px] font-bold leading-[36px] lg:leading-[60px] text-center">
            Apa yang Membuat Nyaman Bekerja di Growlab?
        </h1>
        <div class="grid grid-cols-1 divide-y">
            <div>
                <div class="grid grid-cols-2 divide-x">
                    <div><img src={images.career_momen1} alt="Career Momen 1" /></div>
                    <div><img src={images.career_momen2} alt="Career Momen 2" /></div>
                </div>
            </div>
            </div>
    </div>
    );
}
export default KerjaSection;
