const { createError } = require("../../helpers");
const gravatar = require("gravatar");

const { User } = require("../../models");

const signup = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, subscription, avatarURL });
  newUser.setPassword(password);
  newUser.save();
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
