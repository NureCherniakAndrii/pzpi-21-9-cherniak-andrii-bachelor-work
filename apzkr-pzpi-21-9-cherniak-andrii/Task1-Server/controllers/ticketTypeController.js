const ApiError = require('../error/ApiError');
const {TicketType} = require('../models/models');

class TicketTypeController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const newTicketType = await TicketType.create({
                name: name
            });
            return res.status(200).json({ newTicketType });
        } catch (error) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allTicketTypes = await TicketType.findAll();
            return res.status(200).json({ allTicketTypes });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const ticketType = await TicketType.findByPk(req.params.id);
            if (!ticketType) {
                return res.status(404).json({ message: 'Ticket Type not found' });
            }
            ticketType.name = req.body.name;
            await ticketType.save();
            return res.status(200).json({ ticketType });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const ticketType = await TicketType.findByPk(req.params.id);
            if (!ticketType) {
                return res.status(404).json({ message: 'Ticket Type not found' });
            }
            return res.status(200).json({ ticketType });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const ticketType = await TicketType.findByPk(req.params.id);
            if (!ticketType) {
                return res.status(404).json({ message: 'Ticket Type not found' });
            }
            await ticketType.destroy();
            return res.status(204).json({ message: 'Ticket Type deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new TicketTypeController();