const Service = require('../service/characters.service');

const findAllCharacters = async (req, res) => {
  const allCharacters = await Service.findAllCharacters();

  if (allCharacters.length === 0) {
    return res.status(206).send({ message: 'No characters found' });
  }
  res.send(allCharacters);
};


module.exports = {
    findAllCharacters
}