const mongoose = require("mongoose");

const ratingAndReviewsSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  review: { type: String },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    index: true,
  },
});

module.exports = mongoose.model("RatingAndReview", ratingAndReviewsSchema);
