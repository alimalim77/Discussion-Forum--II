const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const userValidator = require("../../validations/user.validation.js");
const auth = require("../../middlewares/auth.js");

router.post("/new", userValidator.validator, userController.postNew);

router.get("/all1", auth.verifyAuth, userController.getAll);

router.get("/user/:username", userController.getUser);

router.get("/user/id/:id", userController.getID);

router.delete("/user/id/:id", auth.verifyAuthor, userController.deleteUser);

module.exports = router;
