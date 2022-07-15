const Login = require('../model/User');
const jwt = require('jsonwebtoken');

const findByEmailService = (email) => Login.findOne({ email: email });
const findByLoginEmailService = (email) =>
  Login.findOne({ email: email }).select('password');
const findByUserService = (user) => Login.findOne({ user: user });
const findByLoginUserService = (user) =>
  Login.findOne({ user: user }).select('password');

const createUserService = async (nesUser) => await Login.create(nesUser);
const findAllUsersService = async (req, res) => await Login.find();

const genereToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = {
  findByEmailService,
  findByUserService,
  createUserService,
  findAllUsersService,
  findByLoginEmailService,
  findByLoginUserService,
  genereToken,
};
