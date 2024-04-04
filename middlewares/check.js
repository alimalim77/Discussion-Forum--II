const User = require("../models/user.model.js");

const fetchUserInCollection = async (req, res, next) => {
  const user = await User.findOne({ author: req.body.author });

  if (!user)
    return res
      .status(404)
      .send({ message: "user not found", author: req.body.author });
  next();
};

const fetchDiscussion = async (req, res, next) => {
  const discussion = await User.findOne({ _id: req.params.id });
  //console.log(discussion);
  if (!discussion)
    return res
      .status(404)
      .send({ message: "discussion not found", discussionId: req.params.id });
  next();
};

module.exports = { fetchUserInCollection, fetchDiscussion };
