const accountCreationSuccessTemplate = require("../mail/templates/AccountCreatedSuccessfully");
const Profile = require("../models/Profile");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // email verify krunga ki ye hamare database me pehle se toh nahi hai na
    const checkUserExist = await User.findOne({ email: email });
    if (checkUserExist) {
      return res.status(400).json({
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
      accountType: accountType,
      authProvider: "google",
    });

    // mail send krunga

    await mailSender(
      email,
      "Account Created Successfully",
      accountCreationSuccessTemplate(firstName, accountType)
    );
    // response done
    res.status(200).json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log("Error while creating Account With Google", error);
    return res.status(500).json({
      success: false,
      message: "Failed to register with Google...Please Try Again",
    });
  }
};

// login with google

exports.postGoogleLogin = async (req, res) => {
  try {
    // email, uid request ki body se uthaunga
    const { email, googleId } = req.body;
    // email, uid khali ni honi chahiye
    if (!email || !googleId) {
      return res.status(400).json({
        success: false,
        message: "Invalid way to sign in",
      });
    }
    // email, uid check krunga agar nahi exist karti toh bolunga jao signup kro
    const checkUserExist = await User.findOne({
      $or: [{ googleId: googleId }, { email: email }],
    })
      .populate("additionalDetails")
      .exec();
    if (!checkUserExist) {
      return res.status(401).json({
        success: false,
        message: "You Are Not Register with Us",
      });
    }
    // if exist jwt sign karwaunga with payload email, user._id, accountType
    const payload = {
      email: checkUserExist.email,
      accountType: checkUserExist.accountType,
      id: checkUserExist._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    checkUserExist.googleId = undefined;
    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    };
    // res.cookie set krunga token ke name se or options set krunga and status ke saath response bhej dunga
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "User Logged In Successfully",
      user: checkUserExist,
      token: token,
    });
  } catch (error) {
    console.log("Error while login with Google", error);
    return res.status(500).json({
      success: false,
      message: "Failed to login with Google, Please Try Again",
    });
  }
};
