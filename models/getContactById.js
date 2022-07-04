const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");

const getContactById = async (req, res) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const { contactId } = req.params;
  const result = contacts.find((contact) => contact.id === contactId);

  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json({
    status: "success",
    data: {
      result: result,
    },
  });
};

module.exports = { getContactById };
