const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");

const { v4 } = require("uuid");

const addContact = async (req, res) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContact = { id: v4(), ...req.body };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts));
  res.status(201).json({
    status: "success",
    data: {
      result: newContact,
    },
  });
};

module.exports = { addContact };
