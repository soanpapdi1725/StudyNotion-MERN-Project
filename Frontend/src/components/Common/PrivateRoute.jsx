import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userDetail);
  if (user !== null) {
    return children;
  } else {
    toast.error("Please Login first");
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
