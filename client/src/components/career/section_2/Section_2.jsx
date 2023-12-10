import React from "react";
import { images } from "../../../constants";

function Section_2() {
  const inlineSquare = {
    width: '850px',
    height: '50px',
    backgroundColor: '#222',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const outlineSquare = {
    width: '1050px',
    height: '450px',
    backgroundColor: '#444',
    borderRadius: '10px',
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',  
    justifyContent: 'center',
    paddingLeft: '40px',
    paddingRight: '20px',
  };

  const imageStyle = {
   backgroundImage: `url(${images.career_Section_2})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    width: '550px',
    height: '550px',
    marginLeft: '50px',
    marginTop: '135px',
  };

  return (
    <div className="flex flex-col bg-serviceSection w-full 2xl:max-w-[1280px] bg-cover h-full xl:h-[800px] items-center relative xl:overflow-y-visible">
      <div className="flex flex-col items-center justify-center mt-[80px] gap-[16px] w-full lg:w-[564px] mb-[52px]">
        <h1 className="text-[22px] lg:text-[40px] font-bold text-center leading-[32px] lg:leading-[60px] text-whiteSmoke500">
          Memiliki prinsip menjadikan kita tetap kompak
        </h1>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-start items-center xl:justify-center shrink-0 "
        style={inlineSquare}
      ></div>
      <div className="flex" style={outlineSquare}>
        <div style={contentStyle}>
          {/* Judul dan isi di sebelah kiri */}
          <div>
            <h2 className="max-w-[564px] text-[22px] lg:text-[40px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500" style={{ marginBottom: '15px' }}>
              Semangat belajar hal <br /> 
              baru tanpa rasa takut
            </h2>
            <p className="max-w-[564px] text-[12px] lg:text-[18px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600" style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          {/* Foto di sebelah kanan */}
          <div style={imageStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
