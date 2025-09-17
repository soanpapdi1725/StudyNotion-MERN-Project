const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  import.meta.env.VITE_BACKEND_BASE_URL_ONRENDER;

export const courseEndpoints = {
  GET_ALL_CATEGORIES_API: BASE_URL + "/course/getAllCategories",
};

// auth Related EndPoints
export const authEndpoints = {
  SEND_OTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/change-password",
  RESET_PASSWORD_TOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESET_PASSWORD_API: BASE_URL + "/auth/reset-password",
  GOOGLE_SIGNUP_API: BASE_URL + "/auth/google/signup",
  GOOGLE_LOGIN_API: BASE_URL + "/auth/google/login",
};

export const Contact_us_Endpoint = {
  Contact_Us_API: BASE_URL + "/contact-us",
};

export const Profile_Endpoints = {
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PROFILE_IMAGE_API: BASE_URL + "/profile/changeProfileImage",
  DELETE_ACCOUNT_API: BASE_URL + "/profile/deleteAccount",
};
