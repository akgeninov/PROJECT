import AdminProfileDisplay from "../admin-profile-display/AdminProfileDisplay";
import { icon } from "../../../constants";

function AdminHeader({ title, showSearchBar }) {
  return (
    <>
      <AdminProfileDisplay />
      <div className="flex my-12 justify-between items-center max-[769px]:flex-col lg:flex-row md:items-start lg:items-center min-[320px]:max-md:gap-5 min-[320px]:max-md:my-8">
        <p className="text-4xl font-bold min-[320px]:max-md:text-lg min-[320px]:max-md:border border-black min-[320px]:max-md:p-3 min-[320px]:max-md:rounded-xl min-[320px]:max-md:border-b-4 min-[320px]:max-md:border-r-4  ">{title}</p>
        {showSearchBar && (
          <div className="w-1/3 min-[320px]:max-lg:w-[100%] lg:w-1/3 max-lg:mt-2 lg:mt-0 h-full p-2 flex border border-black rounded-lg">
            <img src={icon.searchIcon} alt="search" />
            <input
              type="search"
              className="w-full pl-2 bg-transparent focus:outline-none"
              placeholder="Cari"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default AdminHeader;
