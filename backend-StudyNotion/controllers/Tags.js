const Tag = require("../models/Tag");

// Tag(getAll, create)-(admin) -> course(getAll, create) -> section(CRUD) -> sub-section(CRUD) -> video
exports.createTag = async (req, res) => {
  try {
    // get tagName and description from request ki Body
    const { tagName, tagDescription } = req.body;
    // validate karo khali toh nahi
    if (!tagName || !tagDescription) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const tagExist = await Tag.findOne({ tagName: tagName });
    if (tagExist) {
      return res.status(400).json({
        success: false,
        message: "Tag is already created, Please Delete Previous One",
      });
    }
    // entry kro DB me
    const tagDetails = await Tag.create({
      tagName: tagName,
      tagDescription: tagDescription,
    });
    console.log(tagDetails);
    // response bhej ke soo jao
    return res.status(200).json({
      success: true,
      message: "Tag created Successfully",
    });
  } catch (error) {
    console.log("error while creating a tag: ", error);
    return res.status(500).json({
      success: false,
      message: "Tag does not created, Please Try again",
    });
  }
};

exports.getAllTags = async (req, res) => {
  try {
    const getTags = await Tag.find({}, { tagName: true, tagDescription: true });
    return res.status(200).json({
      success: true,
      message: "Returning all the Tags",
      data: getTags,
    });
  } catch (error) {
    console.log("error while getting all tags ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the Tags, Please try again",
    });
  }
};
