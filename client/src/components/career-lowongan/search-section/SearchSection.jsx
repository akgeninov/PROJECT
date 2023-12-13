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
        <div className=" flex flex-col justify-start  mt-[60px] lg:mt-[10px] px-[10px] lg:px-0 w-full lg:w-[100%] h-full lg:h-[400px] gap-[52px] bg-black"  style={{ height: '400px'}}>
        <div className="flex flex-col justify-start textAlign-left lg:ml-[95px]">
        <p className="max-w-[564px] text-[16px] lg:text-[13px] lg:mb-[15px] font-light leading-[32px] lg:leading-[100px] " style={{ color:'#888'}}>
              Karir  &nbsp; &gt; <span style={{ color: 'white', marginLeft:'5px' }}>  Semua Lowongan</span>
        </p>
        <h2 className="max-w-[564px] text-[22px] lg:text-[40px] lg:mb-[15px] font-bold leading-[32px] lg:leading-[60px] text-whiteSmoke500">
              Semua Lowongan
            </h2>
            <p className="max-w-[564px] text-[12px] lg:text-[18px] lg:mb-[30px] font-light leading-[20px] lg:leading-[28px] text-whiteSmoke600">
              Temukan beragam pilihan karir yang paing sesuai dengan minat, <br />
              bakat, dan passion kamu
            </p>
    <div className="search-container">
      <input
        type="text"
        placeholder="  Cari lowongan yang kamu inginkan"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        style={{ width: "500px", height:"50px", backgroundColor: "lightgrey", borderRadius: '10px'}}
      />
    </div>
    <img src={images.shapes} alt="Right" className="lg:h-[400px] lg:w-[599px] ml-[610px] lg:mr-[250px] mt-[-325px]" style={{ borderRadius: '10px'}} />
    </div>
    </div>
    );
}

export default SearchSection;
