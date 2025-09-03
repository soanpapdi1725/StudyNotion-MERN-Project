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
      className={`grid grid-cols-4 w-full items-center justify-center py-3 text-richblack-100 hover:text-yellow-25 hover:bg-richblack-700 px-2 text-md ${
        matchRoute(path) ? "bg-yellow-400 border-l-1 border-yellow-50" : ""
      } text-white`}
    >
      <span>
        <Icon className="text-xl w-full" />
      </span>
      <span className="col-span-3 ">{name}</span>
    </NavLink>
  );
};

export default SidebarLinks;
