import React from "react";
import { images } from "../../../constants";


function KerjaSection() {
    return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] gap-[52px]"  style={{ height: '800px', backgroundColor: '#EAEAEA' }}>
        <h1 className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] lg:mt-[80px] font-bold leading-[36px] lg:leading-[60px] text-center">
            Apa yang Membuat Nyaman Bekerja di Growlab?
        </h1>
        <div className="flex justify-center">
            <div className="text-center mr-4">
                <img src={images.video_1} alt="Left" className="max-w-[400px] lg:max-w-[400px] mr-4" style={{ borderRadius: '10px' }}/>
                <h3 className="font-bold text-left lg:mt-[40px] ml-2">Dimas Wardana</h3>
                <h3 className="text-left lg:mt-[10px] ml-2"style={{ color: '#12517C' }}>Sales & Marketing Officer</h3>
            </div>
            <div className="text-center">
                <img src={images.video_2} alt="Right" className="max-w-[400px] lg:max-w-[400px]" style={{ borderRadius: '10px' }} />
                <h3 className="font-bold text-left lg:mt-[40px] ml-2">Naura Cantika</h3>
                <h3 className="text-left lg:mt-[10px] ml-2"style={{ color: '#12517C' }}>UI/UX Designer</h3>
            </div>
        </div>
    </div>
    );
}
export default KerjaSection;
