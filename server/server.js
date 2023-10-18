const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, console.log(`server started on PORT ${port}`.yellow.bold));
