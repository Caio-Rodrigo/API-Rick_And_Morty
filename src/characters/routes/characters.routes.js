const router = require('express').Router();
const Character = require('../controller/characters.controller');
const token = require('../../Login/middlewares/login.middlewares');

const {
  validId,
  validObjectBody,
} = require('../middlewares/characters.middlewares');

router.get('/', token, Character.findAllCharacters);
router.get('/:id', token, validId, Character.findByIdCharacters);
router.post('/', token, validObjectBody, Character.createCharacter);
router.put('/:id', token, validObjectBody, validId, Character.updateCharacter);
router.delete('/:id', token, validId, Character.deleteCharacter);

module.exports = router;
