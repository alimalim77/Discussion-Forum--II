const mongoose = require("mongoose");

const discussions = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 150,
      required: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      defaultValue: "",
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", discussions);

module.exports = Users;
