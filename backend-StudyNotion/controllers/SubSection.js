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

exports.updateSubSection = async (req, res) => {
  try {
    //1. subsectionId or uske details jo update hoge wo nikalo request ki body se
    const { subSectionId, newTitle, newDescription, newTimeDuration } =
      req.body;

    //2. get new video from request files or video me store hoga
    const newVideo = req.files.video;

    //3. validation karenge ki empty na ho
    if (!newTitle || !newDescription || !newTimeDuration) {
      return res.status(400).json({
        success: false,
        message: "Subsection field's cannot be empty",
      });
    }
    //4. get secure url or response which cloudinary will give after uploading it to cloudinary

    const newVideoUrl = await imageUploadToCloudinary(
      newVideo,
      process.env.FOLDER_NAME
    );
    //5. find karege and update kar denge new data or newVideoURl.secure.url

    const newSubSection = await SubSection.findByIdAndUpdate(
      { _id: subSectionId },
      {
        title: newTitle,
        description: newDescription,
        timeDuration: newTimeDuration,
        videoUrl: newVideoUrl.secure_url,
      },
      {
        new: true,
      }
    );

    console.log(newSubSection);
    //6.  return response
    return res.status(200).json({
      success: true,
      message: "Subsection successfully Updated",
    });
  } catch (error) {
    console.log("Error while updating Sub-Section", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update Subsection, Please Try Again",
    });
  }
};

exports.deleteSubsection = async (req, res) => {
  try {
    // get subSectionId from request ki body
    const { subSectionId } = req.body;
    // validate that it's not empty
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Subsection Id is not provided",
      });
    }
    // find and delete the subsection document
    await SubSection.findByIdAndDelete({ _id: subSectionId });
    // send response
    return res.status(200).json({
      success: true,
      message: "Subsection deleted successfully",
    });
  } catch (error) {
    console.log("Error while deleting the subsection", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete the subsection, Please Try again",
    });
  }
};
