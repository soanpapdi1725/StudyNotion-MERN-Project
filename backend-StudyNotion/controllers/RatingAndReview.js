const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// create Rating And Review

exports.createRating = async (req, res) => {
  try {
    // kon rating de rha -> user means User Id request ki cookie ki user se nikalo
    // kisko rating de rha -> course means Course Id nikal laao request ki body se
    // kitni rating de rha -> number le aao request ki body se
    // kya likh rha usme -> String le aao request ki body se

    const { courseId, rating, review } = req.body;
    const userId = req.user.id;
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });
    // check user(Student) is enrolled or not
    // means jo enrolled hoga wo hii review de payega
    if (!courseDetails) {
      return res.status(404).json({
        success: true,
        message: "User is not enrolled in course",
      });
    }
    // One user can give review one time... No spamming of reviews is allowed
    const alreadyReviewed = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course is already reviewed by User",
      });
    }
    // rating create kr doge
    
    // course ko update kr dena ki ye ek or rating apne pass rakh lo
    // return response
  } catch (error) {}
};

// get Average Rating

exports.getAverageRating = async (req, res) => {
  try {
  } catch (error) {}
};

// get ALl Rating And Review

exports.getAllRating = async (req, res) => {
  try {
  } catch (error) {}
};
