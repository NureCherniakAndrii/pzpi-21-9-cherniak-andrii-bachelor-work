const Router = require('express');
const StoreController = require('../controllers/StoreController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, StoreController.create);
router.get('/', authMid, StoreController.getAll);
router.get('/:id', authMid, StoreController.getOne);
router.put('/:id', authMid, StoreController.update);
router.delete('/:id', authMid, StoreController.delete);

module.exports = router;
