const router = require('express').Router();
const user = require('../controller/users.controller');
const Check = require('../middlewares/users.middlewares');

router.get('/', user.findAllUser);
router.post('/', Check, user.createrUser);



module.exports = router;
