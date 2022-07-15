const Service = require('../service/uesr.service');
const bcrypt = require('bcrypt');

const findAllUser = async (req, res) => {
  const allUsers = await Service.findAllUsersService();
  if (allUsers.length === 0) {
    return res.status(404).send({ message: 'No user found!' });
  }
  res.send(allUsers);
};

const createrUser = async (req, res) => {
  const Users = req.body;

  const newUser = await Service.createUserService(Users).catch((err) =>
    console.log(err.message),
  );

  if (!newUser) {
    return res.status(400).send({ error: 'Error creating User' });
  }

  res.status(201).send(newUser);
};

const loginUser = async (req, res) => {
  const { user, email, password } = req.body;

  const users = await Service.findByLoginUserService(user);
  const emails = await Service.findByLoginEmailService(email);
  const log = users || emails;

  if (!log) {
    return res.status(400).send({ message: 'User not found!' });
  }

  const isPasswordValid = await bcrypt.compare(password, log.password);

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'invalid password' });
  }

  const token = Service.genereToken(log._id)

  res.send({token});
};

module.exports = {
  createrUser,
  findAllUser,
  loginUser,
};
