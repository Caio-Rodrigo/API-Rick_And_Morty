const router = require('express').Router();
const user = require('../controller/users.controller');
const Check = require('../middlewares/users.middlewares');
const token = require('../../Login/middlewares/login.middlewares');

router.get('/', token, user.findAllUser);
router.post('/', Check, user.createrUser);

module.exports = router;
