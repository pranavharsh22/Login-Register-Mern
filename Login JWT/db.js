const mongoose = require("mongoose");
require("dotenv").config();
module.exports = async () => {
  const connectionparams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.DB, connectionparams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    console.log("An error occurred");
  }
};
