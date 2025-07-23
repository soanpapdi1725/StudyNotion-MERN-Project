const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  tagName: { type: String, required: true },
  tagDescription: {
    type: String,
  },
  onCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("Tag", tagSchema);
