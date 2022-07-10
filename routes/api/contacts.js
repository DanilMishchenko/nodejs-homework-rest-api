const express = require("express");
const router = express.Router();

const { validation } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models");
const { contacts: ctrl } = require("../../controllers");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validation(joiSchema), ctrl.addContact);

router.put("/:contactId", validation(joiSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validation(statusJoiSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
