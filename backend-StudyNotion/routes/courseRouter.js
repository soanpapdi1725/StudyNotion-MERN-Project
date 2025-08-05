// here in this route every creating related work will be done
// such as create category, review and rating, courses, section, subsection
// and also getting allcategory,all review and rating, all courses, all section, all subsection
// and deleting these also

const express = require("express");

const courseRouter = express.Router();

//
//Course controller
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  updateCourseDetails,
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
const {
  auth,
  isInstructor,
  isAdmin,
  isStudent,
} = require("../middlewares/auth");
//
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

// **********************************************************************************************************
//                                          course Controller Routes
// **********************************************************************************************************

// courses can be get by everyone even those who are not logged in
// courses can be create, delete, update by instructor who will be logged in

// get al  course it will be available for all non user's to see courses available on the website
courseRouter.get("/getAllCourses", getAllCourses);

// get course Details it will be available for non user's to see courses details available on the website
courseRouter.get("/getCourseDetails", getCourseDetails);
// authentication and authorization of isIntructor is done so that only instructor can create course
courseRouter.post("/create-Course", auth, isInstructor, createCourse);
// authentication and authorization of isIntructor is done so that only instructor can create section
courseRouter.post("/addSection", auth, isInstructor, createSection);
// authentication and authorization of isIntructor is done so that only instructor can create Subsection
courseRouter.post("/addSubsection", auth, isInstructor, createSubSection);
// authentication and authorization of isIntructor is done so that only instructor can create delete section
courseRouter.delete("/deleteSection", auth, isInstructor, deleteSection);
// authentication and authorization of isIntructor is done so that only instructor can  delete subsection
courseRouter.delete("/deleteSubSection", auth, isInstructor, deleteSubsection);
// authentication and authorization of isIntructor is done so that only instructor can  update courseDetails
courseRouter.put("/editCourse", auth, isInstructor, updateCourseDetails);
// authentication and authorization of isIntructor is done so that only instructor can  update subsection
courseRouter.put("/updateSection", auth, isInstructor, updateSection);
// authentication and authorization of isIntructor is done so that only instructor can  update subsection
courseRouter.put("/updateSubSection", auth, isInstructor, updateSubSection);

// **********************************************************************************************************
//                                          Category Controller Routes
// **********************************************************************************************************
// categories can only be created by admin and all category can be
// get by everyone to know what type of content studyNotion is providing and
//  categoryPage details will be for everyone who are not logged so that
// they know different courses and top selling courses

courseRouter.post("/createCategory", auth, isAdmin, createcategory);
courseRouter.get("/getAllCategories", getAllcategorys);
courseRouter.get("/categoryPageDetails", auth, isStudent, categoryPageDetails);

// **********************************************************************************************************
//                                          Rating and reviews Controller Routes
// **********************************************************************************************************
// rating will be see by everyone who visits website doesnot matter they are logged in or not
// rating will be created by students only
courseRouter.post("/createRatingAndReviews", auth, isStudent, createRating);
courseRouter.get("/getAllReviews", getAllRating);
courseRouter.get("/getAverageRating", getAverageRating);

module.exports = courseRouter;
