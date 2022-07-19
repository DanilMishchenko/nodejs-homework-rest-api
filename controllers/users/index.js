const signup = require("./signup");
const login = require("./login");
const getUser = require("./getUser");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  signup,
  login,
  logout,
  getUser,
  updateSubscription,
  updateAvatar,
};
