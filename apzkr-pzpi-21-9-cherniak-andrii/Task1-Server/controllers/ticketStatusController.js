const ApiError = require('../error/ApiError');
const {TicketStatus} = require('../models/models');

class TicketStatusController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const newTicketStatus = await TicketStatus.create({
                name: name
            });
            return res.status(200).json({ newTicketStatus });
        } catch (error) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allTicketStatuses = await TicketStatus.findAll();
            return res.status(200).json({ allTicketStatuses });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const ticketStatus = await TicketStatus.findByPk(req.params.id);
            if (!ticketStatus) {
                return res.status(404).json({ message: 'Ticket Status not found' });
            }
            ticketStatus.name = req.body.name;
            await ticketStatus.save();
            return res.status(200).json({ ticketStatus });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const ticketStatus = await TicketStatus.findByPk(req.params.id);
            if (!ticketStatus) {
                return res.status(404).json({ message: 'Ticket Status not found' });
            }
            return res.status(200).json({ ticketStatus });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const ticketStatus = await TicketStatus.findByPk(req.params.id);
            if (!ticketStatus) {
                return res.status(404).json({ message: 'Ticket Status not found' });
            }
            await ticketStatus.destroy();
            return res.status(204).json({ message: 'Ticket Status deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new TicketStatusController();
