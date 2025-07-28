// category(getAll, create)-(admin) -> course(getAll, create) -> section(CRUD) -> sub-section(CRUD) -> video

const Course = require("../models/Course");
const Category = require("../models/category");
const User = require("../models/User");
const imageUploadToCloudinary = require("../utils/imageUploader");
require("dotenv").config();

// create Course handler function
exports.createCourse = async (req, res) => {
  try {
    // get course body to store in collection of course
    const {
      courseName,
      courseDescription,
      price,
      categoryId,
      whatYouWillLearn,
      tags
    } = req.body;
    // fetching the file
    const thumbnail = req.file.thumbnailImage;
    // validation of course fields
    if (
      !courseName ||
      !description ||
      !price ||
      !category ||
      !whatYouWillLearn ||
      !tags
    ) {
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
    // categorys validation
    const categoryDetails = await Category.findById(categoryId);
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "category Details not found",
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
      category: categoryDetails._id,
      thumbnail: thumbnailImage.secure_url,
      tags: tags
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
    // category model me jisne wo category use kra hoga usme wo course dalenge
    await Category.findByIdAndUpdate(
      { _id: categoryDetails._id },
      {
        $push: {
          // to insert in array of courses
          onCourses: newCourse._id,
        },
      },
      { new: true }
    );
    // response bhej denge
    return res.status(200).json({
      success: true,
      messsage: "Course Created Successfully",
      data: newCourse,
    });
  } catch (error) {
    console.log("Error while creating Error", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create new Course, Please Try again",
    });
  }
};
// get Course handler function
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        courseDescription: true,
        price: true,
        whatYouWillLearn: true,
        thumbnail: true,
        ratingAndReview: true,
        instructor: true,
        studentsEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "Courses successfully retrieved",
      data: allCourses,
    });
  } catch (error) {
    console.log("Error while getting all the data", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the Courses",
    });
  }
};
