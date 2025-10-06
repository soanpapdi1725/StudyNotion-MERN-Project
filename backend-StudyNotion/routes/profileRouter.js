const express = require("express");

const profileRouter = express.Router();

//get from profile controller
const {
  getUserDetails,
  getEnrolledCourses,
  onImageRemove,
} = require("../controllers/Profile");
//delete from profile controller
const { deleteAccount } = require("../controllers/Profile");
const { auth } = require("../middlewares/auth");
//update from profile controller
const { updateProfile, updateUserImage } = require("../controllers/Profile");

// auth middleware which check JWT token is matching or not
// if matches it will decode it and save it on same place

// **********************************************************************************************************
//                                          Profle Controller Routes
// **********************************************************************************************************
//
// get
profileRouter.get("/getUserDetails", auth, getUserDetails);
profileRouter.get("/getEnrolledCourses", auth, getEnrolledCourses);
// delete
profileRouter.delete("/deleteAccount", auth, deleteAccount);
// put
profileRouter.put("/updateProfile", auth, updateProfile);
profileRouter.put("/changeProfileImage", auth, updateUserImage);
profileRouter.delete("/ImageRemove", auth, onImageRemove);

module.exports = profileRouter;
