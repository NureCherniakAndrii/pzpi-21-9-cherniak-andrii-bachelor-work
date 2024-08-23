const Router = require('express');
const PromStatusController = require('../controllers/PromStatusController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, PromStatusController.create);
router.get('/', authMid, PromStatusController.getAll);
router.get('/:id', authMid, PromStatusController.getOne);
router.put('/:id', authMid, PromStatusController.update);
router.delete('/:id', authMid, PromStatusController.delete);

module.exports = router;
