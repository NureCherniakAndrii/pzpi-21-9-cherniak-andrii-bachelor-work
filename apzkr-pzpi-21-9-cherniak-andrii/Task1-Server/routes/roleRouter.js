const Router = require('express');
const RoleController = require('../controllers/RoleController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, RoleController.create);
router.get('/', authMid, RoleController.getAll);
router.get('/:id', authMid, RoleController.getOne);
router.put('/:id', authMid, RoleController.update);
router.delete('/:id', authMid, RoleController.delete);

module.exports = router;
