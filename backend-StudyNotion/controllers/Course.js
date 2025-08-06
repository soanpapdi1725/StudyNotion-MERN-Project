// category(getAll, create)-(admin) -> course(getAll, create) -> section(CRUD) -> sub-section(CRUD) -> video

const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const { imageUploadToCloudinary } = require("../utils/imageUploader");
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
      tags,
      instructions,
    } = req.body;
    // fetching the file
    const thumbnail = req.files.thumbnail;
    console.log(thumbnail);
    // validation of course fields
    if (
      !courseName ||
      !courseDescription ||
      !price ||
      !categoryId ||
      !whatYouWillLearn ||
      !tags ||
      !instructions
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
    console.log(thumbnailImage);
    // create course and entry in db
    const newCourse = await Course.create({
      courseName: courseName,
      courseDescription: courseDescription,
      price: price,
      whatYouWillLearn: whatYouWillLearn,
      instructor: instructorDetails._id,
      category: categoryDetails._id,
      thumbnail: thumbnailImage.secure_url,
      tag: tags,
      status: "published",
      instructions: instructions,
      imagePublicId: thumbnailImage.public_id,
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
exports.updateCourseDetails = async (req, res) => {
  try {
    // request ki body se mene jo update karna hai nikal liya
    const {
      courseId,
      newCourseName,
      newCourseDescription,
      newTags,
      newPrice,
      newCategoryId,
      newInstructions,
      newWhatYouWillLearn,
    } = req.body;
    // request me files se thumbnail image bhi nikal liya
    const newThumbnail = req.files.newThumbnail;
    // validation that no fields are empty
    if (
      !courseId ||
      !newCourseName ||
      !newCourseDescription ||
      !newTags ||
      !newPrice ||
      !newCategoryId ||
      !newInstructions ||
      !newWhatYouWillLearn
    ) {
      return res.json(400).json({
        success: false,
        message: "All Field's are required",
      });
    }
    // fetching courseDetails and validation
    const courseDetails = await Course.findById(courseId);
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course Details not found",
      });
    }
    // removing course Id  from previous category
    const removeFromPreviousCategory = await Category.findOneAndUpdate(
      { _id: courseDetails.category },
      { $pull: { onCourses: courseDetails._id } },
      { new: true }
    );
    console.log(removeFromPreviousCategory);
    // and saving courseId into new Category
    const saveNewCategory = await Category.findByIdAndUpdate(
      { _id: newCategoryId },
      { $push: { onCourses: courseDetails._id } },
      { new: true }
    );
    console.log(saveNewCategory);
    // uploading new Thumbnail image to cloudinary with public id to remove previousOne
    if (newThumbnail) {
      const newThumbnailImage = await imageUploadToCloudinary(
        newThumbnail,
        process.env.FOLDER_NAME,
        1000,
        1000,
        courseDetails.imagePublicId
      );
      courseDetails.imagePublicId = newThumbnailImage.public_id;
      courseDetails.thumbnail = newThumbnailImage.secure_url;
    }

    // save data in courseDetails object
    courseDetails.courseName = newCourseName;
    courseDetails.courseDescription = newCourseDescription;
    courseDetails.price = newPrice;
    courseDetails.instructions = newInstructions;
    courseDetails.tag = newTags;
    courseDetails.category = newCategoryId;
    courseDetails.whatYouWillLearn = newWhatYouWillLearn;

    // saving the data in courses Database
    await courseDetails.save();
    // response bhej diya ki update ho gya si
    return res.status(200).json({
      success: true,
      message: "Course Updated Successfully",
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update Course... Please Try Again",
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

exports.getCourseDetails = async (req, res) => {
  try {
    // req ki body se courseId milegi
    const { courseId } = req.body;
    // find karenge {_id:courseId} then populate each field and inside field
    const courseInDetail = await Course.find({ _id: courseId })
      .populate("ratingAndReviews")
      .populate({ path: "courseContent", populate: { path: "subSection" } })
      .populate("category")
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .exec();
    // validation kar skte hai
    if (!courseInDetail) {
      return res.status(404).json({
        success: false,
        message: `Course Details Not found ${courseId}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Course Details Fetched Successfully",
      data: courseInDetail,
    });
    // response bhej denge
  } catch (error) {
    console.log("Error while fetching details of course", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
