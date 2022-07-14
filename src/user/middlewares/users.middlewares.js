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

// const nonExistingUser (req, res, next) {
//   const { user, email } = req.body;

//   const nonExtantUser = await Service.findByUserService(user);
//   if (!nonExtantUser) {
//     return res.status(203).send({
//       message: 'User already registered!',
//     });
//   }
//   const nonExtantEmail = await Service.findByEmailService(email);
//   if (!nonExtantEmail) {
//     return res.status(203).send({
//       message: 'Email already registered!',
//     });
//   }
//   next()
// }

module.exports = Check;
