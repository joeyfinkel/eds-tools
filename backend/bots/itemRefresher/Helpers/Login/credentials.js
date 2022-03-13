require('dotenv').config();

module.exports.credentials = {
  email: process.env.PDX_EMAIL,
  password: process.env.PDX_PASSWORD,
};
