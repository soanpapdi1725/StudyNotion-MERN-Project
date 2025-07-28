const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryDescription: {
    type: String,
  },
  onCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("category", categorySchema);
