import { icon, newsPic } from "../../../../constants";
import { Link } from "react-router-dom";

function ArtikelCard({ el, index }) {
  return (
    <Link
      to="/admin/artikel/create"
      key={index}
      className="w-[358px] md:w-[232px] h-[380px] flex flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm relative"
    >
      <img
        src={newsPic.rectangleNews1}
        alt="news"
        className="w-full h-full object-cover"
      />
      <div className="h-3/6 absolute bottom-0 w-full bg-neutral-600 text-white p-3">
        <p className="text-xs font-extralight">{el.date}</p>
        <p className="font-bold my-1 line-clamp-2">{el.title}</p>
        <p className="text-xs font-thin line-clamp-5">{el.description}</p>
      </div>
    </Link>
  );
}

export default ArtikelCard;
