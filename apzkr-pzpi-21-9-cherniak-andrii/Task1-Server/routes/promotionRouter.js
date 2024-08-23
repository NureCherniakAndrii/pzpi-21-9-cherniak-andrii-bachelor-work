const Router = require('express');
const PromotionController = require('../controllers/PromotionController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, PromotionController.create);
router.get('/', authMid, PromotionController.getAll);
router.get('/:id', authMid, PromotionController.getOne);
router.put('/:id', authMid, PromotionController.update);
router.delete('/:id', authMid, PromotionController.delete);

module.exports = router;