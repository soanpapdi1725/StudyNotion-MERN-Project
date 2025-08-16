import { toast } from "react-hot-toast";
import { setLoading } from "../../Slices/authSlice";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";

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


export const 