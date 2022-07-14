const router = require('express').Router();
const user = require('../controller/users.controller');
const Check = require('../middlewares/users.middlewares');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', user.findAllUser);
router.post('/', Check, user.createrUser);
router.put('/edit/:user/:password',)
router;

module.exports = router;
