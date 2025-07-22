const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

// OTP send Controller
exports.sendOTP = async (req, res) => {
  try {
    // user ki email fetch kari
    const { email } = req.body;

    // checking user exists in DB or not in User collection
    const checkUserExist = await User.findOne({ email });

    // if user exists
    if (checkUserExist) {
      return res.status(401).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // if user does not exist then do this

    //Creating a otp
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    // checking OTP exist in OTP collection or not if not result = undefined
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      // if otp exist result will be something means true

      //again creating new otp for uniqueness
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      //   then again checking new otp exist or not until it be unique
      result = await OTP.findOne({ otp: otp });
    }

    // when unique otp is created saving them in database
    const otpPayload = { email, otp };

    // create and save both works the same but save requires a instance of mongoose model
    const otpBody = await OTP.create(otpPayload);

    console.log("OTP created and body: ", otpBody);

    // response is sending after generation of OTP
    res.status(200).json({
      success: true,
      message: "OTP sent Successfully to DB",
    });
  } catch (error) {
    console.log("error while generating otp: ", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Signup Controller

// Login Controller

// Change password Controller
