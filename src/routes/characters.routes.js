const router = require('express').Router()
const Character = require('../controller/characters.controller')
const {validId} = require('../middlewares/characters.middlewares')

router.get('/', Character.findAllCharacters)
router.get('/:id', validId, Character.findByIdCharacters)

module.exports = router
