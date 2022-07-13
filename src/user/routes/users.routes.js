const router = require('express').Router();
const user = require('../controller/users.controller');

router.post('/', user.createrUser);
router.get('/', user.allUser);

module.exports = router;
