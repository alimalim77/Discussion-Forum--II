const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user.controller.js");
const userValidator = require("../../validations/user.validation.js");
const auth = require("../../middlewares/auth.js");

router.post("/new", userValidator.validator, userController.postNew);

router.get("/all1", auth.verifyAuth, userController.getAll);

module.exports = router;
