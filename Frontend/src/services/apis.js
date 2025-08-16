const BASE_URL = "http://localhost:4000/api/v1";

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
}