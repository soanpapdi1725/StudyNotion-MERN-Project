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

const {
  postGoogleRegister,
  postGoogleLogin,
} = require("../controllers/GoogleAuth");
const { auth } = require("../middlewares/auth");

// **********************************************************************************************************
//                                          Authentication Routes
// **********************************************************************************************************
authAndResetRouter.post("/login", postLogin);
authAndResetRouter.post("/signup", postSignUp);
authAndResetRouter.post("/sendotp", sendOTP);
authAndResetRouter.put("/change-password", auth, postChangePass);

// **********************************************************************************************************
//                                          Authentication Routes using Google
// **********************************************************************************************************
authAndResetRouter.post("/google/signup", postGoogleRegister);
authAndResetRouter.post("/google/login", postGoogleLogin);
// **********************************************************************************************************
//                                          Reset password Routes
// **********************************************************************************************************

authAndResetRouter.post("/reset-password-token", resetPassToken);
authAndResetRouter.post("/reset-password", resetPassword);

// exporting it
module.exports = authAndResetRouter;
