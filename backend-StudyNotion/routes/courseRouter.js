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
  updateSection,
} = require("../controllers/SubSection");
const { auth, isInstructor } = require("../middlewares/auth");

// **********************************************************************************************************
//                                          course Controller Routes
// **********************************************************************************************************

courseRouter.get("/getAllCourses", auth, isInstructor, getAllCourses);
courseRouter.get("/getAllCourses", auth, isInstructor, getAllCourses);
courseRouter.post("/create-Course", auth, isInstructor, createCourse);
courseRouter.post("/addSection", auth, isInstructor, createSection);
courseRouter.post("/addSubsection", auth, isInstructor, createSubSection);
