const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    // section ka name nikalo request ki body se
    const { sectionName, courseId } = req.body;
    // validation of section Name
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // creating section
    const newSection = await Section.create({ sectionName: sectionName });
    // adding sectionDetails Object ID in CourseContent as it contains array of sections
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true }
    ).populate({
      path: "courseContent",
      populate: { path: "subSection" },
    });
    // sending response
    return res.status(200).json({
      success: true,
      message: "Section Created",
      data: updatedCourseDetails,
    });
  } catch (error) {
    console.log("Error while creating section", error);
    return res.status(500).json({
      success: false,
      message: "Failed in creating section, Please try again...",
    });
  }
};

exports.updateSection = async (req, res) => {
  try {
    // section Ka Name or Id toh uss section ke update pe click krte hue hii mil jayegi
    const { newSectionName, sectionId } = req.body;
    // milne pe checking kar denge khaali toh nahi
    if (!newSectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // updation kar denge findByIdAndUpdate se
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName: newSectionName },
      { new: true }
    );
    // response bhej denge sir
    return res.status(200).json({
      success: true,
      message: "Section Updated Successfully",
    });
  } catch (error) {
    console.log("Error while updating section", error);
    return res.status(500).json({
      success: false,
      message: "failed to update Section, Please try again...",
    });
  }
};
