const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const userValidator = require("../../validations/user.validation.js");
const auth = require("../../middlewares/auth.js");
const check = require("../../middlewares/check.js");

router.post("/new", userValidator.validator, userController.postNew);

router.get("/all1", auth.verifyAuth, userController.getAll);

router.get("/user/:username", userController.getUser);

router.get("/user/id/:id", userController.getID);

router.delete(
  "/user/id/:id",
  auth.verifyAuthor("delete"),
  userController.deleteUser
);

router.patch(
  "/user/id/:id",
  auth.verifyAuthor("patch"),
  userController.patchUser
);

router.put(
  "/:id/comment",
  check.fetchUserInCollection,
  check.fetchDiscussion,
  userValidator.validateComment,
  userController.putComment
);

module.exports = router;
