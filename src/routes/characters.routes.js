const router = require('express').Router();
const Character = require('../controller/characters.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/characters.middlewares');

router.get('/', Character.findAllCharacters);
router.get('/:id', validId, Character.findByIdCharacters);
router.post('/', validObjectBody, Character.createCharacter);
router.put('/:id', validObjectBody, validId, Character.updateCharacter);
router.delete('/:id', validId, Character.deleteCharacter);

module.exports = router;
