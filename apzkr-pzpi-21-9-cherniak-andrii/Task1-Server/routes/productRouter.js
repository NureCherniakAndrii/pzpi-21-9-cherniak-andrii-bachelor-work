const Router = require('express');
const productController = require('../controllers/productController');
const authMid = require('../middleware/authMiddleware');

const router = new Router();

router.post('/', productController.create);
router.get('/all', productController.getAll);
router.get('/:id', productController.getAllByStore);
router.delete('/:id', productController.delete);
router.put('/:id', productController.changeCountById);
router.get('/byBarcode/:barcode', productController.getCountByBarcode);

module.exports = router;