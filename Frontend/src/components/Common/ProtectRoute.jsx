import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router";

const ProtectRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (token === null) {
    return children;
  } else {
    return <Navigate to={"/dashboard/my-profile"} />
  }
};

export default ProtectRoute;
