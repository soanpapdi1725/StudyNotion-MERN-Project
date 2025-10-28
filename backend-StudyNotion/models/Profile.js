const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["Male", "Female", "Prefer not to say", "Non-Binary", "Others"],
  },
  dateOfBirth: { type: String },
  about: { type: String, trim: true },
  contactNumber: { type: String, trim: true },
});

module.exports = mongoose.model("Profile", profileSchema);
