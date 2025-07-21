const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.Mongoose_Url, {
      useNewURLParse: true,
      newUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb is connected");
    })
    .catch((error) => {
      console.log("MongoDB is not connected");
      console.error(error);
      process.exit(1);
    });
};
