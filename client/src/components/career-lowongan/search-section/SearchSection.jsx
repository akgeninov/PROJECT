import React, { useState } from "react";
import { images } from "../../../constants";

function SearchSection() {

        const [searchTerm, setSearchTerm] = useState("");
      
        const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
        };

        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
              performSearch();
            }
          };
        
          const performSearch = () => {
            alert(`Melakukan pencarian untuk: ${searchTerm}`);
          };

    return (
        <div className=" flex flex-col justify-start lg:mt-[10px] lg:mb-[60px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:h-[444px] gap-[52px] bg-black">
        <div className="flex flex-col justify-start textAlign-left lg:ml-[95px]">
        <p className="max-w-[564px] text-[16px] lg:text-[14px] lg:mb-[15px] font-light leading-[32px] lg:leading-[100px] " style={{ color:'#888'}}>
              Karir  &nbsp; &gt; <span style={{ color: 'white', marginLeft:'5px' }}>  Semua Lowongan</span>
        </p>
        <h2 className="max-w-[564px] text-[22px] lg:text-[48px] lg:mb-[30px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500">
              Semua Lowongan
            </h2>
            <p className="max-w-[564px] text-[12px] lg:text-[18px] lg:mb-[50px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600">
              Temukan beragam pilihan karir yang paing sesuai dengan minat, <br />
              bakat, dan passion kamu
            </p>
        <div className="search-container lg:text-[16px] relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-7 w-6 mr-2 absolute top-1/2 transform -translate-y-1/2"
            style={{ left: '8px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6M3 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Cari lowongan yang kamu inginkan"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            className="lg:w-[556px] h-14 bg-gray-300 rounded-md pl-10"
          />
        </div>



    <img src={images.shapes} alt="Right" className="lg:h-[400px] lg:w-[599px] ml-[610px] lg:mr-[250px] mt-[-325px]" style={{ borderRadius: '10px'}} />
    </div>
    </div>
    );
}

export default SearchSection;
