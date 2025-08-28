const express = require("express");
const contactUsRouter = express.Router();

const { postContactUs } = require("../controllers/ContactUs");
// **********************************************************************************************************
//                                          ContactUs Controller Routes
// **********************************************************************************************************
contactUsRouter.post("/contact-us", postContactUs);

module.exports = contactUsRouter;
