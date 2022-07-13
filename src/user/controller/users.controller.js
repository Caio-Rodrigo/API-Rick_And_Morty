const createrUser = async (req, res) => {
  res.send({ message: ' Create ok"' });
};
const allUser = async (req, res) => {
  res.send({ message: ' Find All ok"' });
};

module.exports = {
  createrUser,
  allUser,
};
