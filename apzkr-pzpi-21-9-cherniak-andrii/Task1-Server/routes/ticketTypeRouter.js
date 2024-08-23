const Router = require('express');
const TicketTypeController = require('../controllers/TicketTypeController');
const authMid = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMid, TicketTypeController.create);
router.get('/', authMid, TicketTypeController.getAll);
router.get('/:id', authMid, TicketTypeController.getOne);
router.delete('/:id', authMid, TicketTypeController.delete);
router.put('/:id', authMid, TicketTypeController.update);

module.exports = router;
