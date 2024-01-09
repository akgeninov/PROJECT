import React, { useState, useEffect } from "react";
import SearchSection from "../../components/career-lowongan/search-section/SearchSection";
import Section_2_lowongan from "../../components/career-lowongan/section2/Section_2_lowongan";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Career() {
  const navigate = useNavigate();
  const [lowonganData, setLowonganData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    getAllLowongan();
  }, []);

  const getAllLowongan = async () => {
    try {
      const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}/lowongan/allLowongan`);
      setLowonganData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleContainerClick = (lowonganId) => {
    // Navigate to your desired route upon container click
    navigate(`/career-lowongan/${lowonganId}`);
  };

  const totalPages = Math.ceil(lowonganData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber) => {
    setStartIndex((pageNumber - 1) * itemsPerPage);
  };

  const displayData = lowonganData.slice(startIndex, startIndex + itemsPerPage);

  const handleNextClick = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  return (
    <div className="flex flex-col justify-center shrink-0 ">
      <SearchSection />
      <div className="max-w-[1080px] justify-center mx-auto">
        <div>
          <h2 className="md:text-[22px] text-[18px] text-[#5E5F60] text-right font-semibold md:p-4 px-10 py-4 mt-[40px]">
            ({lowonganData.length}) Total Lowongan
          </h2>
        </div>
         {displayData.map((el, index) => (
          <Section_2_lowongan
            lowongan={el}
            key={index}
            onClick={() => handleContainerClick(el.id)}
          />
        ))} 

        <div className="grid grid-cols-1 md:grid-cols-2 items-center space-x-4 max-w-[1080px] mx-auto md:p-4 px-10 py-4 mb-[30px]">
          <div className="md:flex md:flex-row md:items-center md:justify-between">
            <p className="md:text-left text-center mb-4 md:mb-0">
              Menampilkan {startIndex + 1} - {Math.min(startIndex + itemsPerPage, lowonganData.length)} dari {lowonganData.length} lowongan tersedia
            </p>           
          </div>
          <div className="flex space-x-2 justify-center md:justify-end ">
              <button onClick={handlePrevClick} disabled={startIndex === 0} className="focus:outline-none">
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`px-2 py-1 rounded-full focus:outline-none ${
                    startIndex / itemsPerPage + 1 === pageNumber
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                onClick={handleNextClick}
                disabled={startIndex + itemsPerPage >= lowonganData.length}
                className="focus:outline-none"
              >
                {/* <FontAwesomeIcon icon={faChevronRight} /> */}
              </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Career;
