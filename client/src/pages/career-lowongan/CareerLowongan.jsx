import React , { useState, useEffect } from "react";
import SearchSection from "../../components/career-lowongan/search-section/SearchSection";
import Section_2_lowongan from "../../components/career-lowongan/section2/Section_2_lowongan";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

function Career() {
    const navigate = useNavigate();
    const [lowonganData, setLowonganData] = useState([]);
  
    useEffect(() => {
      getAllLowongan();
    }, []);

    const getAllLowongan = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}/lowongan/allLowongan`)
        setLowonganData(response.data.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };


    return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <SearchSection />
      {lowonganData?.map((el, index) => (
        <Section_2_lowongan lowongan={el}/>
      ))}
    </div>
    );
}

export default Career;