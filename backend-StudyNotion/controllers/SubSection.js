const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const {
  imageUploadToCloudinary,
  imageAndVideoDeleteFromCloudinary,
} = require("../utils/imageUploader");
require("dotenv").config();
exports.createSubSection = async (req, res) => {
  try {
    // data niklaenge request ki body se
    const { sectionId, title, description } = req.body;
    // video ko request ki file se nikalo
    const video = req.files.video;
    // validation of all fields such that they are not empty
    if (!sectionId || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // uploading video to cloudinary and getting secure URL and public id
    const videoUrl = await imageUploadToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    //SubSection Create karenge
    const newSubSection = await SubSection.create({
      title: title,
      description: description,
      videoUrl: videoUrl.secure_url,
      videoPublicId: videoUrl.public_id,
      timeDuration: `${videoUrl.duration}`,
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
    );
    console.log(updatedSection);
    return res.status(200).json({
      success: true,
      message: "Sub-section Created Successfully",
    });
  } catch (error) {
    console.log("Error while creating SubSection", error);
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
    const { subSectionId, newTitle, newDescription } = req.body;

    //2. get new video from request files or video me store hoga
    const newVideo = req.files.newVideo;

    //3. validation karenge ki empty na ho
    if (!newTitle || !newDescription) {
      return res.status(400).json({
        success: false,
        message: "Subsection field's cannot be empty",
      });
    }

    // 4. getting subsection data and public id to delete previous video to avoid clog in cloudinary
    const subsectionDetails = await SubSection.findById(subSectionId);
    //5. get secure url or response which cloudinary will give after uploading it to cloudinary
    console.log(subsectionDetails.videoPublicId);
    const newVideoUrl = await imageUploadToCloudinary(
      newVideo,
      process.env.FOLDER_NAME,
      1000,
      1000,
      subsectionDetails.videoPublicId
    );
    //5. object me new entries update karke save kr denge with videoPublicId and Secure Url
    subsectionDetails.title = newTitle;
    subsectionDetails.description = newDescription;
    subsectionDetails.videoPublicId = newVideoUrl.public_id;
    subsectionDetails.videoUrl = newVideoUrl.secure_url;
    subsectionDetails.timeDuration = `${newVideoUrl.duration}`;
    await subsectionDetails.save();
    console.log(subsectionDetails);
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
    const { subSectionId, sectionId } = req.body;
    // validate that it's not empty
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Subsection Id is not provided",
      });
    }
    // also delete subsection id from section
    await Section.findByIdAndUpdate(sectionId, {
      $pull: { subSection: subSectionId },
    });
    // find and delete the subsection document
    const deletedSubsection = await SubSection.findByIdAndDelete(subSectionId);
    await imageAndVideoDeleteFromCloudinary(deletedSubsection.videoPublicId);
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
