const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");

const updateContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const { contactId } = req.params;
  const contact = contacts.find((contact) => contact.id === contactId);
  const updatedContact = { ...contact, ...req.body };
  const updatedListOfContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  fs.writeFile(
    contactsPath,
    JSON.stringify({ ...updatedListOfContacts, updatedContact })
  );
  res.status(200).json({
    status: "success",
    data: {
      result: updatedContact,
    },
  });
};

module.exports = { updateContact };
