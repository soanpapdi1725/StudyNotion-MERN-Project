const express = require("express");

const AuthAndResetRouter = express.Router();

const {
  resetPassToken,
  resetPassword,
} = require("../controllers/ResetPassword");
const {
  sendOTP,
  postLogin,
  postSignUp,
  postChangePass,
} = require("../controllers/Auth");

// **********************************************************************************************************
//                                          Authentication Routes
// **********************************************************************************************************
AuthAndResetRouter.post("/login", postLogin);
AuthAndResetRouter.post("/signup", postSignUp);
AuthAndResetRouter.post("/sendotp", sendOTP);
AuthAndResetRouter.post("/change-password", postChangePass);

// **********************************************************************************************************
//                                          Reset password Routes
// **********************************************************************************************************

AuthAndResetRouter.post("/reset-password-token", resetPassToken);
AuthAndResetRouter.post("/reset-password", resetPassword);

// exporting it
module.exports = AuthAndResetRouter;
