const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// const connect = async function (DB_HOST) {
//   try {
//     await mongoose.connect(DB_HOST);
//     console.log("Database connected successful");
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// module.exports = {
//   connect,
// };
