const Profile = require("../models/Profile");
const User = require("../models/User");
exports.updateProfile = async (req, res) => {
  try {
    // get data from request ki body
    const { dateOfBirth = "", about = "", gender, contactNumber } = req.body;
    // get user Id from JWT decode wali jagah se
    const userId = req.user.id;
    // validate kr lo jo bhi aya hai sahi hai ya nahi
    if (!contactNumber || !gender) {
      return res.status(400).json({
        success: false,
        message: "ContactNumber and Gender cannot be empty",
      });
    }
    // user ko find karo DB se
    const userDetails = await User.findById(userId);
    const profileId = userDetails.additionalDetails;

    const profileDetails = await Profile.findById(profileId);
    // additional details me uske ye new wali value update kar do
    profileDetails.gender = gender;
    profileDetails.contactNumber = contactNumber;
    profileDetails.about = about;
    profileDetails.dateOfBirth = dateOfBirth;

    await profileDetails.save();

    // response return
    return res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: profileDetails,
    });
  } catch (error) {
    console.log("Error while updating Profile", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update Profile, Please Try Again",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    // get user id from decode -> req.user.id
    const userId = req.user.id;
    // check valid user Id
    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const userDetails = await User.findById(userId);
    // profile delete kro pehle uss user ka
    await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });

    await User.findByIdAndDelete(userId);
    // Fir user ki detail bhi detail
    return res.status(200).json({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    console.log("Error in deleting Account", error);
    return res.status(500).json({
      success: true,
      message: "Failed to delete the account, Please Try again",
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    // userid nikal lo decode -> req.user.id
    const userId = req.user.id;
    // validate userId

    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // getting details of that user
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.status(200).json({
      success: true,
      message: "User Details Fetched Successfully",
    });
  } catch (error) {
    console.log("Error while fetching user details");
    return res.status(500).json({
      success: false,
      message: "Failed to get User Details, Please Try again",
    });
  }
};
