import { icon, logo } from "../../../constants";
import { NavLink, useNavigate } from "react-router-dom";

const menus = [
  {
    icon: icon.iconHome,
    label: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    icon: icon.iconCourse,
    label: "Kelas Bisnis",
    route: "/admin/kelas-bisnis",
  },
  {
    icon: icon.iconArticle,
    label: "Artikel",
    route: "/admin/artikel",
  },
];

function AdminSidebar() {
  const navigate = useNavigate();

  function iconClickHandler() {
    navigate("/admin");
  }

  function activeNavHandler({ isActive }) {
    return {
      fontWeight: isActive ? "700" : "300",
      border: isActive ? "1px solid black" : "",
      boxShadow: isActive
        ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        : "",
      borderRadius: isActive ? "0.5rem" : "",
    };
  }

  return (
    <aside className="w-1/5 h-screen sticky top-0 flex flex-col items-center border-r border-gray-300 shadow-md">
      <img
        onClick={iconClickHandler}
        className="w-[100px] h-[100px] my-8 shrink-0 cursor-pointer"
        src={logo.growlab}
        alt="growlab"
      />
      <div className="w-full px-4">
        {menus.map((menu) => (
          <NavLink
            to={menu.route}
            key={menu.label}
            className="flex flex-row justify-center items-center m-4 py-2"
            style={activeNavHandler}
          >
            <img className="w-[24px]" src={menu.icon} alt={menu.label} />
            <p className="ml-2 basis-5/12">{menu.label}</p>
            <img
              className="-rotate-90"
              src={icon.chevronSmallDownLight}
              alt="arrow"
            />
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default AdminSidebar;
