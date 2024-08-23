const Router = require('express');
const treningController = require('../controllers/TreningController');
const authMid = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', authMid, treningController.create);
router.get('/', authMid, treningController.getAll);
router.get('/:id', authMid, treningController.getOne);
router.delete('/:id', authMid, treningController.delete);
router.put('/:id', authMid, treningController.update);

module.exports = router;