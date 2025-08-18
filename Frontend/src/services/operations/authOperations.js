import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../Slices/authSlice";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { setUser } from "../../Slices/profileSlice";

const {
  SEND_OTP_API,
  SIGNUP_API,
  LOGIN_API,
  CHANGE_PASSWORD_API,
  RESET_PASSWORD_TOKEN_API,
  RESET_PASSWORD_API,
} = authEndpoints;
export const sendotp = (email, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log(email);
      const response = await apiConnector("POST", SEND_OTP_API, {
        email,
      });
      console.log("SENDING OTP....", response);
      if (!response.data.success) {
        toast.error(response.message);
      }
      toast.success("OTP SEND SUCCESSFULLY");
      navigate("/verify-email");
    } catch (error) {
      console.log("SEND OTP ERROR......", error);
      toast.error("could not send otp");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("LOGIN API....", response);
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.image
        ? response.data?.user?.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data?.user?.firstName} ${response.data?.user?.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...response.data.user, image: userImage })
      );
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Error while setting token and user in login in", error);
      toast.error("Could not login...Please try Again");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const logout = (navigate) => {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successful");
    navigate("/");
  };
};
