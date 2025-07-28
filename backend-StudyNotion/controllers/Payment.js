const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const courseEnrollmentEmail = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

// capture the payment and intiate razorpay create order
exports.capturePaymentapturePayment = async (req, res) => {
  // userId nikalenge and courseId lenge
  const { courseId } = req.body;
  const userId = req.user.id;
  // validation karenge
  // valid CourseId
  if (!courseId) {
    return res.status(400).json({
      success: false,
      message: "Course Id not found",
    });
  }
  let courseDetails;
  try {
    // valid courseDetail
    courseDetails = await Course.findById(courseId);
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }
    // user already enrolled toh nahi hai
    const uid = new mongoose.Types.ObjectId(userId);
    if (courseDetails.studentsEnrolled.includes(uid)) {
      return res.status(200).json({
        success: false,
        message: "User is already enrolled with the course",
      });
    }
  } catch (error) {
    console.log("Error while getting Course Details", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get Course Details, Please Try again",
    });
  }
  const amount = courseDetails.price;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
    notes: {
      courseId: courseId,
      userId: userId,
    },
  };
  try {
    // order create
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);
    return res.status(200).json({
      success: true,
      courseName: courseDetails.courseName,
      courseDescription: courseDetails.courseDescription,
      thumbnail: courseDetails.thumbnail,
      order_id: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    console.log("error while initiating order", error);
    return res.status(500).json({
      success: false,
      message: "Failed to initiate order, Please Try again",
    });
  }
  // return response
};
