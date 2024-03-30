const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/discussions/index.js");

//Configuration for dotenv service
dotenv.config();

// Middleware for parsing JSON requests (app.use(express.json()))
app.use(express.json());

// MongoDB connection setup using Mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log(`Connecting to Mongo using ${process.env.MONGODB_URI}`)
  );

// Route setup for the discussions service
app.use("/discussions", userRoute);

// App listening for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
