const express = require("express");

const AuthAndResetRouter = express.Router();

const resetController = require("../controllers/ResetPassword");
const authController = require("../controllers/Auth");

// **********************************************************************************************************
//                                          Authentication Routes
// **********************************************************************************************************
AuthAndResetRouter.post("/login", authController.postLogin);
AuthAndResetRouter.post("/signup", authController.postSignUp);
AuthAndResetRouter.post("/sendotp", authController.sendOTP);
AuthAndResetRouter.post("/change-password", authController.postChangePass);

// **********************************************************************************************************
//                                          Reset password Routes
// **********************************************************************************************************

AuthAndResetRouter.post(
  "/reset-password-token",
  resetController.resetPassToken
);
AuthAndResetRouter.post("/reset-password", resetController.resetPassword);

// exporting it
module.exports = AuthAndResetRouter;
