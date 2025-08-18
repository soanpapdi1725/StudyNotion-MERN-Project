const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:4000/api/v1";

// Debug: Log the BASE_URL to see what's being used
console.log("BASE_URL:", BASE_URL);
console.log("Environment variable:", import.meta.env.VITE_BASE_URL);

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
};
