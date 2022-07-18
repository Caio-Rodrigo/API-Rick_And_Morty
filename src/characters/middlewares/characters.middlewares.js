require('dotenv').config();
const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;

  if (!character.name && !character.picture) {
    return res.status(400).send({ message: 'Fill in all fields!' });
  }
  if (!character.name) {
    return res.status(400).send({ message: 'Fill in the character field!' });
  }
  if (!character.picture) {
    return res.status(400).send({ message: 'Fill in the picture field!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
