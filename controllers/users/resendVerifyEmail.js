const { User } = require("../../models");
const { createError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(404);
  }
  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Confirm your registration",
    html: `<a target="_blank" href="https://localhost:3000/api/users/verify/${user.verificationToken}">Click to continue registration</a>`,
  };

  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
