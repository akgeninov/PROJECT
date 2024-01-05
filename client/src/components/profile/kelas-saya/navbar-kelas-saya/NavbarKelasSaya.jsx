import { Outlet, NavLink } from "react-router-dom";
export default function NavbarKelasSaya() {
  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      fontSize: "24px",
      textUnderlineOffset: "30px",
    };
  };
  const activeLink =
    "[&>hr]:opacity-100 delay-700 duration-300 ease-in-out  items-center justify-center flex flex-col";
  const unactiveLink = "[&>hr]:opacity-0";

  return (
    
    <div className="flex-initial">
      {/* lg:Submenu */}
      <nav className="flex gap-[27px] mb-[54px]">
        {[
          ["Semua Kelas", "/profile/kelas-saya/semua-kelas"],
          ["Belum Dimulai", "/profile/kelas-saya/belum-dimulai"],
          ["Sedang Dipelajari", "/profile/kelas-saya/sedang-dipelajari"],
          ["Selesai", "/profile/kelas-saya/selesai"],
        ].map(([title, url]) => (
          <NavLink
            to={url}
            style={NavlinkStyles}
            className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
          >
            {title}
            <hr className="w-[39px] h-[5px] bg-black500 border-3 rounded-[50px]"></hr>
          </NavLink>
        ))}
      </nav>

      {/* <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Options
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          {[
            ["Semua Kelas", "/profile/kelas-saya/semua-kelas"],
            ["Belum Dimulai", "/profile/kelas-saya/belum-dimulai"],
            ["Sedang Dipelajari", "/profile/kelas-saya/sedang-dipelajari"],
            ["Selesai", "/profile/kelas-saya/selesai"],
          ].map(([title, url]) => (
            <div className="py-1" role="none">
              <NavLink
                to={url}
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                {title}
              </NavLink>
            </div>
          ))}
        </div>
      </div> */}

      <Outlet />
    </div>
  );
}
