import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { matchPath, useLocation } from "react-router";
const SidebarLinks = ({ name, iconName, path }) => {
  const icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return <div></div>;
};

export default SidebarLinks;
