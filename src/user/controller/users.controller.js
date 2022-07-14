const Service = require('../service/uesr.service');

const createrUser = async (req, res) => {
  const Users = req.body;
  const { user, email } = req.body;
  
  const extantUser = await Service.findByUserService(user);
  if (extantUser) {
    return res.status(203).send({
      message: 'User already registered!',
    });
  }
  const extantEmail = await Service.findByEmailService(email); 
  if (extantEmail) {
    return res.status(203).send({
      message: 'Email already registered!',
    });
  }

  const newUser = await Service.createUserService(Users).catch((err) =>
    console.log(err.message),
  );

  if (!newUser) {
    return res.status(400).send({ error: 'Error creating User' });
  }

  res.status(201).send(newUser);
};
const findAllUser = async (req, res) => {
  const allUsers = await Service.findAllUsersService();
  if(allUsers.length  === 0){
    return res.status(404).send({ message: 'No user found!' });
  }
  res.send(allUsers);
};

module.exports = {
  createrUser,
  findAllUser,
};
