const express = require("express");

const authAndResetRouter = express.Router();

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
authAndResetRouter.post("/login", postLogin);
authAndResetRouter.post("/signup", postSignUp);
authAndResetRouter.post("/sendotp", sendOTP);
authAndResetRouter.post("/change-password", postChangePass);

// **********************************************************************************************************
//                                          Reset password Routes
// **********************************************************************************************************

authAndResetRouter.post("/reset-password-token", resetPassToken);
authAndResetRouter.post("/reset-password", resetPassword);

// exporting it
module.exports = authAndResetRouter;
