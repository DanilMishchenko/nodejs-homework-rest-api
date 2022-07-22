const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const { User } = require("../../models");

const { createError, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email);

  const newUser = new User({
    email,
    subscription,
    avatarURL,
    verificationToken,
  });

  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Confirm your registration",
    html: `<a target="_blank" href="https://localhost:3000/api/users/verify/${verificationToken}">Click to continue registration</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
