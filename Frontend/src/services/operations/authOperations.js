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
  GOOGLE_LOGIN_API,
  GOOGLE_SIGNUP_API,
} = authEndpoints;
export const sendotp = (email, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SEND_OTP_API, {
        email,
      });
      console.log("SENDING OTP....", response);
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      toast.success("OTP SEND SUCCESSFULLY");
      navigate("/signup/verify-email");
    } catch (error) {
      console.log("SEND OTP ERROR......", error);
      toast.error(error.response.data.message);
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
      toast.error(error.response.data.message);
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
    navigate("/login");
  };
};

export const resetPasswordToken = (email, setEmailSent) => {
  return async (dispatch) => {
    const toastId = toast.loading("Sending Reset Link...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESET_PASSWORD_TOKEN_API, {
        email,
      });
      console.log("SENDING RESET LINK...response", response);
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      toast.success(response.data.message);
      setEmailSent(true);
    } catch (error) {
      console.log("Error while sending Reset Link", error);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const resetPasswordDone = (password, confirmPassword, token) => {
  return async (dispatch) => {
    const toastId = toast.loading("Changing Your password");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESET_PASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      console.log("RESET PASSWORD RESPONSE....", response);
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      toast.success("Password Changed Successfully");
      toast.dismiss(toastId);
      dispatch(setLoading(false));
      return response.data.email;
    } catch (error) {
      console.log("Error while Changing the Password");
      toast.error(error.response.data.message);
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const signupUser = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  contactNumber,
  accountType,
  navigate
) => {
  return async (dispatch) => {
    const toastId = toast.loading("Creating Your Id");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        contactNumber,
        accountType,
      });

      console.log("SIGNUP RESPONSE...", response);
      if (!response.data.success) {
        toast.error(response.data.success);
        toast.dismiss(toastId);
        dispatch(setLoading(false));
        return;
      }
      toast.success("Account Created Successfully");
      toast.success("Please Login Your Account");
      navigate("/login");
    } catch (error) {
      console.log("Error while registering New Account", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

// **********************************************************************************************************
//                                          GOOGLE REGISTER/LOGIN API OPERATIONS
// **********************************************************************************************************

export const googleSignUp = (
  firstName,
  lastName,
  email,
  googleId,
  image,
  contactNumber,
  accountType,
  navigate
) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", GOOGLE_SIGNUP_API, {
        firstName,
        lastName,
        email,
        googleId,
        image,
        contactNumber,
        accountType,
      });
      console.log("GOOGLE LOGIN CONSOLE....", response);
      if (!response.data.success) {
        toast.dismiss(toastId);
        toast.error(response.data.message);
        dispatch(setLoading(false));
        return;
      }
      toast.success("Account Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error while Registering with Google", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

export const googleLogin = (email, googleId, image, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", GOOGLE_LOGIN_API, {
        email,
        googleId,
        image,
      });
      console.log("CONSOLE FOR GOOGLE LOGIN....", response);
      if (!response.data.success) {
        toast.dismiss(toastId);
        toast.error(response.data.message);
        dispatch(setLoading(false));
        return;
      }
      const { token, user, message } = response.data;
      dispatch(setToken(token));
      const userImage = response.data?.user?.image
        ? response.data?.user?.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data?.user?.firstName} ${response.data?.user?.lastName}`;
      dispatch(setUser({ ...user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, image: userImage })
      );
      toast.success(message);
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Error while Login in with google", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
};

// 