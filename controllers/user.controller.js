const UserService = require("../services/user.service.js");

const postNew = async (req, res) => {
  const resp = await UserService.newPost(req.body);
  res.status(resp.code).send(resp);
};

const getAll = async (req, res) => {
  const resp = await UserService.allGet();
  res.status(resp.code).send(resp);
};

const getUser = async (req, res) => {
  let username = req.params.username;
  const resp = await UserService.getUser(username);
  res.status(resp.code).send(resp);
};

module.exports = {
  postNew,
  getAll,
  getUser,
};
