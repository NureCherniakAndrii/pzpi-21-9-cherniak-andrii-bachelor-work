const ApiError = require('../error/ApiError');
const {Ticket} = require('../models/models');

class TicketController {

    async create(req, res, next) {
        try {
            const { title, text, ticketTypeId, ticketStatusId, userId, storeId } = req.body;
            const newTicket = await Ticket.create({
                title: title,
                text: text,
                ticketTypeId: ticketTypeId,
                ticketStatusId: ticketStatusId,
                userId: userId,
                storeId: storeId
            });
            return res.status(200).json({ newTicket });
        } catch (error) {
            console.log(error);
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allTickets = await Ticket.findAll();
            return res.status(200).json({ allTickets });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const ticket = await Ticket.findByPk(req.params.id);
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            ticket.title = req.body.title;
            ticket.text = req.body.text;
            ticket.ticketTypeId = req.body.ticketTypeId;
            ticket.ticketStatusId = req.body.ticketStatusId;
            ticket.userId = req.body.userId;
            ticket.storeId = req.body.storeId;
            await ticket.save();
            return res.status(200).json({ ticket });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const ticket = await Ticket.findByPk(req.params.id);
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            return res.status(200).json({ ticket });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const ticket = await Ticket.findByPk(req.params.id);
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' });
            }
            await ticket.destroy();
            return res.status(204).json({ message: 'Ticket deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new TicketController();