const authMid = require('../middleware/authMiddleware');

const Router = require('express');
const userController = require('../controllers/userController');

const router = new Router();

router.post('/login', userController.login);
router.post('/register', userController.registration);

router.get('/check', userController.checkToken);


router.get('/byToken', authMid, userController.getOne);

router.get('/', authMid, userController.getAll);

module.exports = router;