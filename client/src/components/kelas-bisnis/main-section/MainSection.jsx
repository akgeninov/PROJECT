import React, { useEffect, useState } from "react";
import { kelasBisnis } from "./constant/data";
import { icon, kelasBisnisPic } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import PaginationDetaile from "../../global-component/pagination/pagination-detaile/PaginationDetaile";
import KelasBisnisCard from "./kelas-bisnis-card/KelasBisnisCard";

function MainSection() {
  const [pageCount, setPageCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataClass, setDataClass] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9;

  const navigate = useNavigate();

  const handlePageClick = (event) => {
    navigate(`/layanan/kelas-bisnis?page=${event.selected + 1}`);
    // console.log(event.selected);
  };

  useEffect(() => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);
    console.log(url);
    const path = url.pathname;

    if (path.includes("/layanan/kelas-bisnis")) {
      const searchParams = new URLSearchParams(url.search);

      const pageValue = searchParams.get("page");
      const tipeValue = searchParams.get("type");

      console.log(pageValue, tipeValue);
      setCurrentPage(pageValue - 1);
      const newOffset = ((pageValue - 1) * itemsPerPage) % kelasBisnis.length;
      const endOffset = newOffset + itemsPerPage;
      setDataClass(kelasBisnis);
      setCurrentItems(kelasBisnis.slice(newOffset, endOffset));
      setPageCount(Math.ceil(kelasBisnis.length / itemsPerPage));
    } else {
      console.log("Path tidak sesuai dengan /layanan/kelas-bisnis");
    }
  }, [window.location.href]);

  return (
    <div className="w-full px-[5px] md:px-[100px] 2x:max-w-[1080px] flex justify-center items-center mt-[160px]">
      <div className="w-full flex flex-col items-center gap-[52px]">
        <div className="w-full flex flex-col items-center gap-[32px]">
          <div className="w-full   flex justify-end">
            <p>({kelasBisnis.length}) Kelas Ditemukan</p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[24px] ">
            {currentItems?.map((el, index) => (
              <KelasBisnisCard el={el} index={index} />
            ))}
          </div>
        </div>

        <div className="w-full ">
          <PaginationDetaile
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={currentPage}
            dataFound={kelasBisnis}
            currentItems={currentItems}
            marginBot={"mb-[160px]"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
