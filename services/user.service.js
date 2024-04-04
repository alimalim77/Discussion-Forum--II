const Users = require("../models/user.model.js");

const newPost = async (data) => {
  try {
    const resp = await Users.create(data);
    return {
      code: 200,
      data: resp,
    };
  } catch (error) {
    if (error.code === 11000)
      return {
        code: 404,
        message: "user already exists",
        author: error.keyValue.author,
      };
    return {
      code: 500,
      error,
    };
  }
};

const allGet = async () => {
  try {
    const resp = await Users.find({});
    if (resp.length === 0)
      return { code: 404, message: "No Discussions found" };

    return {
      code: 200,
      data: resp,
    };
  } catch (error) {
    return {
      code: 500,
      error,
    };
  }
};

const getUser = async (data) => {
  try {
    const resp = await Users.find({ author: data });
    if (!(resp.length === 0))
      return {
        code: 200,
        data: resp,
      };
    else {
      return {
        code: 404,
        message: "No discussions found for this user",
        data,
      };
    }
  } catch (error) {
    return {
      code: 500,
      error,
    };
  }
};

const getID = async (data) => {
  try {
    const resp = await Users.find({ _id: data });
    if (resp.length === 0)
      return {
        code: 404,
        message: "No discussions found with this id",
        discussionId: data,
      };
    return {
      code: 200,
      data: resp,
    };
  } catch (error) {
    return {
      code: 500,
      message: "Internal Server Error",
      error,
    };
  }
};

const deleteUser = async (data) => {
  try {
    await Users.deleteOne({ _id: data });
    return {
      code: 200,
      message: "User deleted successfully",
    };
  } catch (error) {
    return {
      code: 500,
      message: "Internal Server Error",
    };
  }
};

const patchUser = async (id, body) => {
  try {
    const user = await Users.findByIdAndUpdate(id, body, { new: true });
    return { code: 200, data: user };
  } catch (error) {
    return { code: 500, error: error };
  }
};

const putComment = async (id, body) => {
  try {
    const user = await Users.findById(id);
    user.comments.push(body);
    await user.save();
    return { code: 200, user: user };
  } catch (error) {
    return { code: 500, error: error.message };
  }
};

module.exports = {
  newPost,
  allGet,
  getUser,
  getID,
  deleteUser,
  patchUser,
  putComment,
};
