const Users = require("../models/user.model.js");

const newPost = async (data) => {
  try {
    const resp = await Users.create(data);
    return {
      code: 200,
      data: resp,
    };
  } catch (err) {
    if (err.code === 11000)
      return {
        code: 404,
        message: "user already exists",
        author: err.keyValue.author,
      };
    return {
      code: 500,
      error: err,
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
  } catch (err) {
    return {
      code: 500,
      error: err,
    };
  }
};

module.exports = {
  newPost,
  allGet,
};
