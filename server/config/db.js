const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://devgoel12072004:9690011021dev@cluster0.ehl1v1y.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(
      `MongoDB connected,${conn.connection.host}`.blue.bold.underline
    );
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
