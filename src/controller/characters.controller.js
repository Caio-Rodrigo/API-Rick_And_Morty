const Service = require('../service/characters.service');

function characterExists(Character, res) {
  if (!Character) {
    return res.status(206).send({ message: 'Character not found!' });
  }
}

const findAllCharacters = async (req, res) => {
  const allCharacters = await Service.findAllCharacters();

  if (allCharacters.length === 0) {
    return res.status(206).send({ message: 'No characters found' });
  }
  res.send(allCharacters);
};

const findByIdCharacters = async (req, res) => {
  const id = req.params.id;
  const character = await Service.findByIdCharacters(id);
  characterExists(character, res);
  res.send(character);
};

const createCharacter = async (req, res) => {
  const character = req.body;
  const newCharacter = await Service.createCharacter(character);
  res.status(201).send(newCharacter);
};

const updateCharacter = async (req, res) => {
  const id = req.params.id;
  const editCharacter = req.body;
  const Character = await Service.findByIdCharacters(id);
  characterExists(Character, res);

  const updateCharacter = await Service.updateCharacter(id, editCharacter);
  res.send(updateCharacter);
};

const deleteCharacter = async (req, res) => {
  const id = req.params.id;
  const character = Service.findByIdCharacters(id);
  characterExists(Character, res);

  await Service.deleteCharacter(id);
  res.send({ message: 'character deleted successfully!' });
};

module.exports = {
  findAllCharacters,
  findByIdCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
