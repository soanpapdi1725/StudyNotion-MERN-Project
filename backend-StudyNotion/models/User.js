const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
    active: { type: Boolean, default: true },
    approve: { type: Boolean, default: true },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    coursesCreatedOrEnroll: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    image: { type: String, trim: true },
    imagePublicId: { type: String },
    courseProgress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseProgress",
    },
    resetToken: {
      type: String,
    },
    resetPassExpiration: {
      expires: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
