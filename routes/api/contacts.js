const express = require("express");
const router = express.Router();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models");

const { postValid, putValid } = require("../../middlewares/validation");

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", postValid, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", putValid, updateContact);

module.exports = router;
