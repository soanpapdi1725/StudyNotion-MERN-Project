import * as Icons from "react-icons/vsc";
import { matchPath, NavLink, useLocation } from "react-router";
const SidebarLinks = ({ name, iconName, path }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <NavLink
      to={path}
      className={`grid grid-cols-1 sm:grid-cols-4 w-full items-center justify-center py-3 text-richblack-100  px-2 text-md ${
        matchRoute(path)
          ? "bg-yellow-600 lg:border-l-5 lg:border-b-0 border-b-5 border-yellow-50 rounded-lg "
          : "hover:text-yellow-25 hover:bg-richblack-700"
      } text-white transition-all duration-200 ease-in-out transform-border`}
    >
      <span>
        <Icon className="text-2xl sm:text-xl w-full" />
      </span>
      <span className="sm:col-span-3 hidden sm:inline">{name}</span>
    </NavLink>
  );
};

export default SidebarLinks;
