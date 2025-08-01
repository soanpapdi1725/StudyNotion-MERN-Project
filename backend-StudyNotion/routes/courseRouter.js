// here in this route every creating related work will be done
// such as create category, review and rating, courses, section, subsection
// and also getting allcategory,all review and rating, all courses, all section, all subsection
// and deleting these also

const express = require("express");

const courseRouter = express.Router();

//category controller
const {
  createcategory,
  getAllcategorys,
  categoryPageDetails,
} = require("../controllers/Category");
//
//review and rating controller
const {
  createRating,
  getAllRating,
  getAverageRating,
} = require("../controllers/RatingAndReview");
//
//Course controller
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/Course");
//
// section controller
const {
  createSection,
  deleteSection,
  updateSection,
} = require("../controllers/Section");
//
// subsection Controller
const {
  createSubSection,
  deleteSubsection,
  updateSubSection,
} = require("../controllers/SubSection");
const { auth, isInstructor } = require("../middlewares/auth");

// **********************************************************************************************************
//                                          course Controller Routes
// **********************************************************************************************************

// get al  course it will be available for all non user's to see courses available on the website
courseRouter.get("/getAllCourses", getAllCourses);

// get course Details it will be available for non user's to see courses details available on the website
courseRouter.get("/getCourseDetails", getCourseDetails);
courseRouter.post("/create-Course", auth, isInstructor, createCourse);
courseRouter.post("/addSection", auth, isInstructor, createSection);
courseRouter.post("/addSubsection", auth, isInstructor, createSubSection);
courseRouter.delete("/deleteSection", auth, isInstructor, deleteSection);
courseRouter.delete("/deleteSubSection", auth, isInstructor, deleteSubsection);
courseRouter.put("/updateSection", auth, isInstructor, updateSection);
courseRouter.put("/updateSubSection", auth, isInstructor, updateSubSection);
