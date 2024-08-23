const Router = require('express');
const TicketStatusController = require('../controllers/TicketStatusController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, TicketStatusController.create);
router.get('/', authMid, TicketStatusController.getAll);
router.get('/:id', authMid, TicketStatusController.getOne);
router.put('/:id', authMid, TicketStatusController.update);
router.delete('/:id', authMid, TicketStatusController.delete);

module.exports = router;
