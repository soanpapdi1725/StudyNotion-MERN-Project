import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const ProtectRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  if (token === null) {
    return children;
  } else {
    return <Navigate to={"/dashboard/my-profile"} />;
  }
};

export default ProtectRoute;
