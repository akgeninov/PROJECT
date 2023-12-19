import { Outlet, NavLink } from "react-router-dom";
export default function NavbarKelasSaya() {

  const NavlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      fontSize: "24px",
      textUnderlineOffset: "30px",

      }
    };
    const activeLink = "[&>hr]:opacity-100 delay-700 duration-300 ease-in-out  items-center justify-center flex flex-col";
    const unactiveLink = "[&>hr]:opacity-0";
  
  return (
    <div className="flex-initial">
      <p className="text-[24px] md:text-[32px] font-semibold leading-[72px] mb-[20px]">Kelas Saya</p>
      <nav className="flex gap-[20px] mb-[20px]">
          {[
            ['Semua Kelas', '/profil/kelas-saya/semua-kelas'],
            ['Belum Dimulai', '/profil/kelas-saya/belum-dimulai'],
            ['Sedang Dipelajari', '/profil/kelas-saya/sedang-dipelajari'],
            ['Selesai', '/profil/kelas-saya/selesai'],
          ].map(([title, url]) => (
            <NavLink to={url} style={NavlinkStyles} className={({ isActive }) => (isActive ? activeLink : unactiveLink)}>{title}
              <hr className="w-[39px] h-[5px] bg-black500 border-3 rounded-[50px]"></hr>
            </NavLink>
          ))}
      </nav>
      <Outlet />

      {/* "[&>hr]:visible flex flex-col items-center justify-center" */}
    </div>
  );
}
      // className="[&>hr]:hidden flex flex-col items-center justify-center"
