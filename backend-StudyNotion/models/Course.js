const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: { type: String, trim: true },
  description: { type: String, trim: true },
  price: { type: Number, trim: true },
  whatYouWillLearn: { type: string, trim: true },
  ratingAndReviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RatingAndReview"
  },
  tags: {
type: mongoose.Schema.Types.ObjectId,
ref:"Tag"
  },
  thumbnails: {
    type: String,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  studentsEntrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

module.exports =  mongoose.model("Course", courseSchema)