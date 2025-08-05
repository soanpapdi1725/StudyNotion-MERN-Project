const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: { type: String, trim: true },
  courseDescription: { type: String, trim: true },
  price: { type: Number, trim: true },
  whatYouWillLearn: { type: String, trim: true },
  ratingAndReviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RatingAndReview",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  thumbnail: {
    type: String,
  },
  imagePublicId: {
    type: String,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  tag: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["published", "Draft"],
  },
});

module.exports = mongoose.model("Course", courseSchema);
