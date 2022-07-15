const router = require('express').Router();
const LogController = require('../controller/login.controller');

router.post('/',LogController.loginUser) 

module.exports = router
