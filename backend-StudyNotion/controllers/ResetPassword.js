const User = require("../models/User");
const mailsender = require("../utils/mailSender");
const crypto = require("crypto");
// Reset Password Token Controller
exports.resetPassToken = async (req, res) => {
  try {
    // user entered his email to get reset pass link
    // fetch email from req ki body
    const { email } = req.body;
    // check user email correct and not empty
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email field is not filled by user to Proceed",
      });
    }

    // check user exist or not in User collection
    const checkUserExist = await User.findOne({ email });
    if (!checkUserExist) {
      return res.json({
        success: false,
        message: "This Email is not registered with us",
      });
    }
    // generate token
    const token = crypto.randomUUID();
    // update particular User's database with key token and resetPassExpiration
    const updatedUserObj = await User.findOneAndUpdate(
      { email }, // filter on this basis
      {
        token: token, //update
        resetPassExpiration: Date.now() + 5 * 60 * 1000, //update
      },
      { new: true } //return updatedDocument
    );
    const frontendPORT = 3000;
    const resetUrl = `http://localhost:${frontendPORT}/update-password/${token}`;
    // mail send kar do unique link ke saath
    await mailsender(
      email,
      "Password reset Link - StudyNotion",
      `Password Reset Link ${resetUrl}`
    );
    // response send kr do uske baad
    return res.status(200).json({
      success: true,
      message:
        "Reset Password link successfully sent, Please check given email id and Change password",
    });
  } catch (error) {
    console.log("Error while sending Reset password link", error);
    return res.status(500).json({
      success: false,
      message: "Something went Wrong while sending reset password mail",
    });
  }
};

// Reset Password Controller
