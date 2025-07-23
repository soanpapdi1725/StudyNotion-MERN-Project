// Tag(getAll, create)-(admin) -> course(getAll, create) -> section(CRUD) -> sub-section(CRUD) -> video

const Course = require("../models/Course");
const Tag = require("../models/Tag");
const User = require("../models/User");
const imageUploadToCloudinary = require("../utils/imageUploader");
require("dotenv").config();

// create Course handler function
exports.createCourse = async (req, res) => {
  try {
    // get course body to store in collection of course
    const { courseName, courseDescription, price, tagId, whatYouWillLearn } =
      req.body;
    // fetching the file
    const thumbnail = req.file.thumbnailImage;
    // validation of course fields
    if (!courseName || !description || !price || !tag || !whatYouWillLearn) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory",
      });
    }
    // instructor ka instance bhi toh store karna padta hai ki kisne create kari ye course
    const instructorId = req.user.id;
    const instructorDetails = await User.findById(instructorId);
    console.log(instructorDetails);
    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details not found",
      });
    }
    // tags validation
    const tagDetails = await Tag.findById(tagId);
    if (!tagDetails) {
      return res.status(404).json({
        success: false,
        message: "Tag Details not found",
      });
    }
    // image ko cloudinary me save karenge
    // secure URL milti hai store karne pe jo use kr skte to get the image back
    const thumbnailImage = await imageUploadToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    // create course and entry in db
    const newCourse = await Course.create({
      courseName: courseName,
      courseDescription: courseDescription,
      price: price,
      whatYouWillLearn: whatYouWillLearn,
      instructor: instructorDetails._id,
      tag: tagDetails._id,
      thumbnail: thumbnailImage,
    });
    // user(instructor) how many course created by that particular instructor will be stored in course
    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      {
        $push: {
          // to insert in array of courses
          coursesCreatedOrEnroll: newCourse._id,
        },
      },
      { new: true }
    );
    // tag model me jisne wo tag use kra hoga usme wo course dalenge
    // response bhej denge
  } catch (error) {}
};
// get Course handler function
exports.getAllCourses = async (req, res) => {
  try {
  } catch (error) {}
};
