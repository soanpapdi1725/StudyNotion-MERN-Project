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
    try{
        // get user id from decode -> req.user.id
        // check valid user Id
        // profile delete kro pehle uss user ka
        // 
    }
    catch(error){

    }
}