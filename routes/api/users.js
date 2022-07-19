const express = require("express");

const { validation, authenticate, upload } = require("../../middlewares");
const {
  joiSignupSchema,
  joiSigninSchema,
  joiSubscriptionSchema,
} = require("../../models/user");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiSigninSchema), ctrlWrapper(ctrl.login));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.getUser));

router.patch(
  "/",
  authenticate,
  validation(joiSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
