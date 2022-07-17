require('dotenv').config();

function Check(req, res, next) {
  const { user, username, email, password } = req.body;

  if (!user && !username && email && !password) {
    return res.status(400).send({ message: 'Fill in all fields' });
  }

  if (!user) {
    return res.status(400).send({ message: 'Please fill the field : User!' });
  }
  if (!username) {
    return res
      .status(400)
      .send({ message: 'Please fill the field : UserName!' });
  }
  if (!email) {
    return res.status(400).send({ message: 'Please fill the field : Email!' });
  }
  if (!password) {
    return res
      .status(400)
      .send({ message: 'Please fill the field : Password!' });
  }

  next();
}

module.exports = Check;
