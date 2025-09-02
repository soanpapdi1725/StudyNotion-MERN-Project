import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { matchPath, NavLink, useLocation } from "react-router";
const SidebarLinks = ({ name, iconName, path }) => {
  const icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return <NavLink to={path} className={`${matchRoute(path)? "bg-yellow-800" : ""}`}></NavLink>;
};

export default SidebarLinks;
