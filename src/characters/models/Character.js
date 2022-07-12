const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
});

const Character = mongoose.model('Character', characterSchema, 'characters');

module.exports = Character;
