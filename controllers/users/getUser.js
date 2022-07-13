const getUser = async (req, res) => {
  const { email, subscription } = req.user;
  console.log(req.user);
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = getUser;
