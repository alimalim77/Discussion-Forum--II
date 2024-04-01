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

const getID = async (req, res) => {
  let id = req.params.id;
  const resp = await UserService.getID(id);
  res.status(resp.code).send(resp);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const resp = await UserService.deleteUser(id);
  res.status(resp.code).send({ message: resp.message });
};

const patchUser = async (req, res) => {
  const id = req.params.id;
  const author = req.body.author;
  const resp = await UserService.patchUser(id, author);
  if (resp.null === true) res.status(resp.code).send(resp.error);
  res.status(200).send(resp);
};

module.exports = {
  postNew,
  getAll,
  getUser,
  getID,
  deleteUser,
  patchUser,
};
