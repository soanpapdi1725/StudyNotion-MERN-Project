const express = require("express");
const app = express();

const courseRouter = require("./routes/courseRouter");
const authAndResetRouter = require("./routes/AuthAndResetRouter");
const paymentRouter = require("./routes/paymentRouter");
const profileRouter = require("./routes/paymentRouter");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 4000;

app.use(express.json());
