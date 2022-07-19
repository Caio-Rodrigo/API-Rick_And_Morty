const Service = require('../service/uesr.service');

const findAllUser = async (req, res) => {
  const allUsers = await Service.findAllUsersService();
  if (allUsers.length === 0) {
    return res.status(200).send({ message: 'No user found!' });
  }
  res.send(allUsers);
};

const createrUser = async (req, res) => {
  const Users = req.body;

  const newUser = await Service.createUserService(Users).catch((err) =>
    console.log(err.message),
  );

  if (!newUser) {
    return res.status(500).send({ error: 'Error creating User' });
  }

  res.status(201).send(newUser);
};

module.exports = {
  createrUser,
  findAllUser,
};
