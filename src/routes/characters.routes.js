const router = require('express').Router()
const Character = require('../controller/characters.controller')

router.get('/', Character.findAllCharacters)

module.exports = router