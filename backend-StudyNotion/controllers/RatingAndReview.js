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
    const newRatingReview = await RatingAndReview.create({
      rating: rating,
      review: review,
      user: userId,
      course: courseId,
    });
    // course ko update kr dena ki ye ek or rating apne pass rakh lo
    const courseDetailsReviewAdded = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          RatingAndReview: newRatingReview._id,
        },
      },
      { new: true }
    );
    console.log(courseDetailsReviewAdded);

    return res.status(200).json({
      success: true,
      message: "Rating And Review Created Successfully",
      data: newRatingReview,
    });
    // return response
  } catch (error) {
    console.log("Error While CreatinG Review and Rating", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create Rating and review, Please Try Again",
    });
  }
};

// get Average Rating

exports.getAverageRating = async (req, res) => {
  try {
    // courseId request ki body se nikalenge jiske rating ka average nikalne ke liye
    const courseId = req.body.courseId;

    // average nikalenge rating ki
    // courseId ke basis pe separate krenge rating ko
    // aggregate returns a array and we need to define steps in object inside array
    // group kr denge _id: null means saare jo mile hai unpe operation karo
    // averageRating naam ki ek key bana denge like this [{averageRating: }]
    // usme fir operation karenge operation--> $avg : "$rating" <-- on that field
    const result = await RatingAndReview.aggregate([
      { $match: { _id: courseId } }, // step 1
      { $group: { _id: null, averageRating: { $avg: "$rating" } } },
    ]);

    // if averageRating is there it will be sent
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    // if the course is new there will be no rating so it will be Zero
    return res.status(200).json({
      success: true,
      message: "There is not rating on this course",
      averageRating: 0,
    });
    // return response
  } catch (error) {
    console.log("Error while getting Average rating", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the Average Rating, Please Try Again",
    });
  }
};

// get ALl Rating And Review
exports.getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.find({})
      .sort({
        rating: "descending",
      })
      .populate({ path: "user", select: "firstName lastName email image" })
      .populate({ path: "course", select: "courseName" })
      .exec();

    return res.status(200).json({
      success: true,
      message: "All Reviews are fetched Successfully",
      data: allReviews,
    });
  } catch (error) {
    console.log("Error while getting All Reviews", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the all Reviews, Please Try Again",
    });
  }
};
