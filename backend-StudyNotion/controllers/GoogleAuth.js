const Profile = require("../models/Profile");
const User = require("../models/User");

exports.postGoogleRegister = async (req, res) => {
  try {
    // request ki body se name(firstName and lastName), email, photoUrl(image), googleID, accountType, authProvider
    const {
      firstName,
      lastName,
      email,
      googleId,
      image,
      contactNumber,
      accountType,
    } = req.body;
    // khali toh nahi hai ye
    if (!firstName || !email || !googleId || !image || !accountType) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // email verify krunga ki ye hamare database me pehle se toh nahi hai na
    const checkUserExist = await User.findOne({ email: email });
    if (checkUserExist) {
      res.status(400).json({
        success: false,
        message: `User already Exists with ${email}`,
      });
    }
    // additional details khali rakhunga
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      contactNumber: contactNumber,
      about: null,
    });

    // save krunga
    const googleUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      googleId: googleId,
      image: image,
      additionalDetails: profileDetails._id,
    });
    // mail send krunga
    // response done
  } catch (error) {}
};
