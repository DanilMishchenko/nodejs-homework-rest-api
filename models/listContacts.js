const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async (_, res) => {
  const data = await fs.readFile(contactsPath);
  const result = JSON.parse(data);
  res.status(200).json({
    status: "success",
    data: {
      result: result,
    },
  });
};
module.exports = { listContacts };
