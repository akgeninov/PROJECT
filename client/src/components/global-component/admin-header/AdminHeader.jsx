import AdminProfileDisplay from "../admin-profile-display/AdminProfileDisplay";
import { icon } from "../../../constants";

function AdminHeader({ title, showSearchBar }) {
  return (
    <>
      <AdminProfileDisplay />
      <div className="flex my-12 justify-between items-center">
        <p className="text-4xl font-bold">{title}</p>
        {showSearchBar && (
          <div className="w-1/3 h-full p-2 flex border border-black rounded-lg">
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
