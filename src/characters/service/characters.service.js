const Character = require('../models/Character');

const findAllCharacters = async (req, res) => await Character.find();

const countCharacters =()=>Character.countDocuments()

const findByIdCharacters = async (id) => await Character.findById(id);

const createCharacter = async (newCharacter) =>
  await Character.create(newCharacter);

const updateCharacter = async (id, editedCharacter) =>
  await Character.findByIdAndUpdate(id, editedCharacter).setOptions({
    returnOriginal: false,
  });

const deleteCharacter = async (id) => await Character.findByIdAndDelete(id);

const findByCharacterNameService = (name) =>
  Character.findOne({ name: name });

module.exports = {
  findAllCharacters,
  findByIdCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  findByCharacterNameService,
  countCharacters
};
