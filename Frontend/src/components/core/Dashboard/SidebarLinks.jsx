import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { matchPath, NavLink, useLocation } from "react-router";
const SidebarLinks = ({ name, iconName, path }) => {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <NavLink
      to={path}
      className={`${
        matchRoute(path)
          ? "bg-yellow-400 border-l-1 border-yellow-50"
          : "opacity-0"
      }`}
    >
      <Icon className="text-xl w-full" />
      <span>{name}</span>
    </NavLink>
  );
};

export default SidebarLinks;
