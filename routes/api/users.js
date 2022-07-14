const express = require("express");

const { validation, authenticate } = require("../../middlewares");
const { joiSignupSchema, joiSigninSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiSigninSchema), ctrlWrapper(ctrl.login));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getUser));

module.exports = router;
