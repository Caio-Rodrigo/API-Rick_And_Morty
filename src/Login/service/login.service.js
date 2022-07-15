const Login = require('../../user/model/User');
const jwt = require('jsonwebtoken');

const findByLoginEmailService = (email) =>
  Login.findOne({ email: email }).select('password');
const findByLoginUserService = (user) =>
  Login.findOne({ user: user }).select('password');
const genereToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: '12h' });
};

module.exports = {
  findByLoginEmailService,
  findByLoginUserService,
  genereToken,
};
