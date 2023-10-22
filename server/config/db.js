const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(
      `MongoDB connected,${conn.connection.host}`.blue.bold.underline
    );
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
