const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactShema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const contacts = mongoose.model("contact", contactShema);

module.exports = { contacts };
