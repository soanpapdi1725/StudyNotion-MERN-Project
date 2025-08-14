const Category = require("../models/Category");

// category(getAll, create)-(admin) -> course(getAll, create) -> section(CRUD) -> sub-section(CRUD) -> video
exports.createcategory = async (req, res) => {
  try {
    // get categoryName and description from request ki Body
    const { categoryName, categoryDescription } = req.body;
    // validate karo khali toh nahi
    if (!categoryName || !categoryDescription) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const categoryExist = await Category.findOne({
      categoryName: categoryName,
    });
    if (categoryExist) {
      return res.status(400).json({
        success: false,
        message: "category is already created, Please Delete Previous One",
      });
    }
    // entry kro DB me
    const categoryDetails = await Category.create({
      categoryName: categoryName,
      categoryDescription: categoryDescription,
    });
    console.log(categoryDetails);
    // response bhej ke soo jao
    return res.status(200).json({
      success: true,
      message: "category created Successfully",
    });
  } catch (error) {
    console.log("error while creating a category: ", error);
    return res.status(500).json({
      success: false,
      message: "category does not created, Please Try again",
    });
  }
};

exports.getAllcategorys = async (req, res) => {
  try {
    const getcategorys = await Category.find(
      {},
      { categoryName: true, categoryDescription: true }
    );
    return res.status(200).json({
      success: true,
      message: " all the categorys",
      data: getcategorys,
    });
  } catch (error) {
    console.log("error while getting all categorys ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the categorys, Please try again",
    });
  }
};

exports.categoryPageDetails = async (req, res) => {
  try {
    // get categoryId
    const { categoryId } = req.body;
    // get all course related to that particular categoryId
    const selectedCategoryCourses = await Category.findById(categoryId)
      .populate("onCourses")
      .exec();
    // validation that if course not found
    if (!selectedCategoryCourses) {
      return res.status(404).json({
        success: false,
        message: "Course specified to the category not found",
      });
    }
    // also get courses for different categories which user(student) can buy
    const differentCategoryCourses = await Category.find({
      _id: { $ne: categoryId },
    })
      .populate("onCourses")
      .exec();
    // also get courses which are top selling on my website
    const topSellingCourse = await Course.aggregate([
      { $addFields: { $enrolledCount: { $size: "$studentsEnrolled" } } },
      { $sort: { $enrolledCount: -1 } },
      { $limit: 5 },
    ]);
    return res.status(200).json({
      success: true,
      message: "Courses specified to category are fetched successfully",
      data: {
        selectedCategoryCourses,
        differentCategoryCourses,
        topSellingCourses,
      },
    });
    // return response
  } catch (error) {
    console.log("Error while getting courses specified to categoryId", error);
    return res.status(500).json({
      success: false,
      message:
        "Failed to get couses specified to category Id, Please Try Again",
    });
  }
};
