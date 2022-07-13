const express = require("express");

const { authenticate, validation, isValidId } = require("../../middlewares");
const {
  joiSchema,
  statusJoiSchema,
  joiSubscriptionSchema,
} = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(joiSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:contactId",
  isValidId,
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.patch(
  "/",
  authenticate,
  validation(joiSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
