const express = require("express");
const paymentRouter = express.Router();

const {
  capturePayment,
  verifyPaymentSignature,
} = require("../controllers/Payment");
const { isStudent, auth } = require("../middlewares/auth");

paymentRouter.post("/capturepayment", auth, isStudent, capturePayment);
paymentRouter.post("/verifySignature", verifyPaymentSignature);

module.exports = paymentRouter;
