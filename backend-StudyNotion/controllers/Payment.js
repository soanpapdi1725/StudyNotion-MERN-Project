const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const courseEnrollmentEmail = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

// capture the payment and intiate razorpay create order
exports.capturePayment = async (req, res) => {
  // userId nikalenge and courseId lenge
  const { courseId } = req.body;
  const userId = req.user.id;
  // validation karenge
  // valid CourseId
  if (!courseId) {
    return res.status(404).json({
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
    // order create and recieve response
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);
    // return response
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
};

exports.verifyPaymentSignature = async (req, res) => {
  const webHookSecret = "123456789";
  const signature = req.headers["x-razorpay-signature"];

  const shasum = crypto.createHmac("sha256", webHookSecret);
  shasum.update(JSON.stringify(req.body));
  // jab ham kisi hashing algorithm ko run krte hai kisi particular input pe toh ek output ata hai jo ki digest naam se jana jata hai jisme digest hexadecimal format me hota hai
  const digest = shasum.digest("hex");

  if (signature === digest) {
    console.log("payment is authorised");
    const { courseId, userId } = req.body.payload.payment.entity.notes;
    try {
      // fullfill the action
      // findCourse And Update Add update student in course's EnrollStudents array
      //   1. Course ko Baccha mil gya
      const enrolledCourse = await Course.findByIdAndUpdate(
        { _id: courseId },
        { $push: { studentsEnrolled: userId } },
        { new: true }
      );
      console.log(enrolledCourse);
      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          message: "Course Not Found and Student Couldn't be Able to Enrolled",
        });
      }
      // add it in user(Student) coursesCreatedOrEnroll section that ensures that particular student is enrolled in those courses
      //   find studentDetails using User id
      //   2. bacche ko Course mil gya
      const enrolledStudent = await User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: {
            coursesCreatedOrEnroll: courseId,
          },
        },
        { new: true }
      );
      console.log(enrolledStudent);
      //   sending Confirmation mail
      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Course successfully purchased",
        "Congratulation, You are successfully onboard a course on StudyNotion"
      );
      console.log(emailResponse);
      return res.status(200).json({
        success: true,
        message: "Course Successfully Purchased",
      });
    } catch (error) {
      console.log("Error while getting course Details and User details", error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Signature and WebHookSecret not matched",
    });
  }
};
