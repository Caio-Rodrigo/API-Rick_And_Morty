const Login = require('../model/User');

const findByEmailService = (email) => Login.findOne({ email: email });

const findByUserService = (user) => Login.findOne({ user: user });

const createUserService = async (nesUser) => await Login.create(nesUser);
const findAllUsersService = async (req, res) => await Login.find();

module.exports = {
  findByEmailService,
  findByUserService,
  createUserService,
  findAllUsersService,
};
