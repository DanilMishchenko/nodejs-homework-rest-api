const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  console.log(req.query);
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner: _id }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email subscription");
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = listContacts;
