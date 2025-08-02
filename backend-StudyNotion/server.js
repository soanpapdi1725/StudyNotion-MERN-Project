const express = require("express");
const app = express();

const courseRouter = require("./routes/courseRouter");
const authAndResetRouter = require("./routes/AuthAndResetRouter");
const paymentRouter = require("./routes/paymentRouter");
const profileRouter = require("./routes/paymentRouter");

const database = require("./config/database");
const cloudinary = require("./config/cloudinary");
const razorpay = require("./config/razorpay");
