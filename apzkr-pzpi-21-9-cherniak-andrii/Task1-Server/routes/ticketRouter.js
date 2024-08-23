const Router = require('express');
const TicketController = require('../controllers/TicketController');
const authMid = require('../middleware/authMiddleware');


const router = Router();

router.post('/', authMid, TicketController.create);
router.get('/', authMid, TicketController.getAll);
router.get('/:id', authMid, TicketController.getOne);
router.put('/:id', authMid, TicketController.update);
router.delete('/:id', authMid, TicketController.delete);

module.exports = router;
