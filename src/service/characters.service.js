const Character = require('../models/Character');

const findAllCharacters = async (req, res) => await Character.find();

module.exports = {
  findAllCharacters,
};
