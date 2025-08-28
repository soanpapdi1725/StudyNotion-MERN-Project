const {
  contactCompanyTemplate,
  contactCustomerTemplate,
} = require("../mail/templates/ContactUsTemplates");
const mailSender = require("../utils/mailSender");
require("dotenv").config();
exports.postContactUs = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    if (!firstName || !email || !contactNumber || !message) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Sending mail to customer
    await mailSender(
      email,
      "We will Contact you soon - StudyNotion",
      contactCustomerTemplate(firstName, lastName, contactNumber, message)
    );

    // sending mail to our Marketting or counselling team to contact the person
    await mailSender(
      process.env.COMPANY_SIDE_EMAIL,
      "New Contact to Customer Request - StudyNotion",
      contactCompanyTemplate(firstName, lastName, email, contactNumber, message)
    );

    res.status(200).json({
      success: true,
      message:
        "We have sent Your request to our team... We will contact to you Shortly",
    });
  } catch (error) {
    console.log("Error while sending mail to customer and company", error);
    res.status(500).json({
      success: false,
      message: "Failed in notifying the customer and company",
    });
  }
};
