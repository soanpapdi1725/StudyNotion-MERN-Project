import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { Profile_Endpoints } from "../apis";
import { setUser } from "../../Slices/profileSlice";

const { CHANGE_PROFILE_IMAGE_API, DELETE_ACCOUNT_API, UPDATE_PROFILE_API } =
  Profile_Endpoints;

export const changeProfileImage = (formData, setLoading) => {
  return async (dispatch) => {
    const toastId = toast.loading("Uploading Image...");
    setLoading(true);
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
      setLoading(false);
    }
  };
};
