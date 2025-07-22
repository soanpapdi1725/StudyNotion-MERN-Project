const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  contactNumber: { type: Number, trim: true },
  password: { type: String, required: true, trim: true },
  accountType: {
    type: String,
    enum: ["Student", "Instructor", "Admin"],
    required: true,
  },
  active: { type: Boolean, default: false },
  approve: { type: Boolean, default: false },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  image: { type: String, trim: true },

  courseProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseProgress",
  },
  token: {
    type: String,
  },
  resetPassExpiration: {
    expires: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
