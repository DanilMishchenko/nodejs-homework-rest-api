const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(201).json({
    status: "success",
    data: {
      result,
    },
  });
};

module.exports = removeContact;
