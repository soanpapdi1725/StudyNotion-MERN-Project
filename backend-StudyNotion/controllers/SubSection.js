const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const { imageUploadToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();
exports.createSubSection = async (req, res) => {
  try {
    // data niklaenge request ki body se
    const { sectionId, title, description, timeDuration } = req.body;
    // video ko request ki file se nikalo
    const video = req.files.video;
    // validation of all fields such that they are not empty
    if (!sectionId || !title || !description || !timeDuration || !videoUrl) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // uploading video to cloudinary and getting secure URL
    const videoUrl = await imageUploadToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    //SubSection Create karenge
    const newSubSection = await SubSection.create({
      title: title,
      description: description,
      videoUrl: videoUrl.secure_url,
      timeDuration: timeDuration,
    });
    // update section and push this new objectID of this subsection into it
    const updatedSection = await Section.findByIdAndUpdate(
      {
        _id: sectionId,
      },
      {
        $push: {
          subSection: newSubSection._id,
        },
      },
      { new: true }
    ).populate("subSection");
    console.log(updatedSection);
    return res.status(200).json({
      success: true,
      message: "section Created Successfully",
    });
  } catch (error) {
    console.log("Error while creating Section", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create SubSection, Please Try Again",
      error: error.message,
    });
  }
};