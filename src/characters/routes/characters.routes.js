const router = require('express').Router();
const Character = require('../controller/characters.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');
const {
  validId,
  validObjectBody,
} = require('../middlewares/characters.middlewares');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', Character.findAllCharacters);
router.get('/:id', validId, Character.findByIdCharacters);
router.post('/', validObjectBody, Character.createCharacter);
router.put('/edit/:id', validObjectBody, validId, Character.updateCharacter);
router.delete('/delete/:id', validId, Character.deleteCharacter);

module.exports = router;
