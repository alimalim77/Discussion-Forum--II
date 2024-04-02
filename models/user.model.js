const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      immutable: true,
    },
    content: {
      type: String,
      required: true,
      maxLength: 500,
    },
  }
  //{ _id: false } // Exclude the id field from the schema
);

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
      immutable: true,
    },
    content: {
      type: String,
      default: "",
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", discussions);

module.exports = Users;
