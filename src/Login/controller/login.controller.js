const Service = require('../service/login.service');
const bcrypt = require('bcrypt');

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
      return res.status(406).send({ message: 'invalid password' });
    }
  
    const token = Service.genereToken(log._id)
  
    res.send({token});
  };

  module.exports = {loginUser};
