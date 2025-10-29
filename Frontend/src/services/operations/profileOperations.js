import { toast, ToastBar } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { Profile_Endpoints } from "../apis";
import { setLoading, setUser } from "../../Slices/profileSlice";
import { setToken } from "../../Slices/authSlice";

const {
  CHANGE_PROFILE_IMAGE_API,
  DELETE_ACCOUNT_API,
  UPDATE_PROFILE_API,
  REMOVE_IMAGE_API,
  CHANGE_PASSWORD_API,
  GET_ENROLLED_COURSES_API,
} = Profile_Endpoints;

export const changeProfileImage = (formData) => {
  return async (dispatch) => {
    const toastId = toast.loading("Uploading Image...");
    dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      const response = await apiConnector(
        "PUT",
        CHANGE_PROFILE_IMAGE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("CHANGE PROFILE RESPONSE.......", response);
      if (!response.data.success) {
        throw new Error();
      }
      // Update user data in Redux store with new image
      dispatch(setUser(response.data.data));

      // Update localStorage with new user data
      localStorage.setItem("user", JSON.stringify(response.data.data));
      toast.success("Image Uploaded");
    } catch (error) {
      console.log("ERROR IN SERVICES PROFILE CHANGING PROFILE IMAGE", error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const removeProfileImage = () => {
  return async (dispatch) => {
    const toastId = toast.loading("Removing Profile Image...");
    dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector("DELETE", REMOVE_IMAGE_API, null, {
        Authorization: `Bearer ${token}`,
      });
      console.log("DELETE PROFILE IMAGE RESPONSE....", response);
      if (!response.data.success) {
        throw new Error();
      }
      const newDataOfUser = response.data.data;
      dispatch(setUser(newDataOfUser));
      localStorage.setItem("user", JSON.stringify(newDataOfUser));
      toast.success("Image Removed Successfully");
    } catch (error) {
      console.log("ERROR IN SERVICES, REMOVING PROFILE IMAGE", error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const updateUserInfo = (formData) => {
  const fullContactNumber = formData.countryCode + " " + formData.contactNumber;
  formData.contactNumber = fullContactNumber;
  delete formData.countryCode;
  console.log("formData.....", formData);
  return async (dispatch) => {
    const toastId = toast.loading("Updating your info...");
    dispatch(setLoading(true));
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });
      console.log("PROFILE UPDATION RESPONSE.......", response);
      if (!response.data.success) {
        throw new error();
      }
      const newUserData = response.data.data;
      dispatch(setUser(newUserData));
      localStorage.setItem("user", JSON.stringify(newUserData));
      toast.success("Updated Your Info successfully");
    } catch (error) {
      console.log("ERROR IN SERVICES, UPDATING YOUR INFO", error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const changePassword = (changePassData) => {
  return async (dispatch) => {
    const toastId = toast.loading("Changing Your Password...");
    dispatch(setLoading(true));
    console.log(changePassData);
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await apiConnector(
        "PUT",
        CHANGE_PASSWORD_API,
        changePassData,
        { Authorization: `Bearer ${token}` }
      );

      console.log("CHANGE PASSWORD RESPONSE.....", response);
      if (!response?.data?.success) {
        throw new Error("Failed to Change the Password");
      }
      toast.success("Password is successfully changed");
    } catch (error) {
      console.log("ERROR WHILE CHANGING THE PASSWORD....", error);
      toast.error(error?.response?.data?.message);
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const deleteAccount = () => {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting Your Account");
    dispatch(setLoading(true));
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await apiConnector("DELETE", DELETE_ACCOUNT_API, null, {
        Authorization: `Bearer ${token}`,
      });
      if (!response?.data?.success) {
        throw new Error("Failed to Delete the Account");
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setToken(null));
      dispatch(setUser(null));
      toast.success("Your Account Successfully Deleted");
    } catch (error) {
      console.log("ERROR WHILE DELETING THE ACCOUNT OF USER...", error);
      toast.error(error?.response?.data?.message);
    } finally {
      toast.dismiss(toastId);
      dispatch(setLoading(false));
    }
  };
};

export const getEnrolledCourses = async (signal) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await apiConnector(
      "GET",
      GET_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
      null,
      signal
    );
    if (!response?.data?.success) {
      throw new Error("Failed to get User's Enrolled courses");
    }
    return response?.data?.data;
  } catch (error) {
    console.log("ERROR WHILE GETTING ENROLLED COURSES....", error);
    toast.error(error?.response?.data?.message);
    return [];
  }
};
