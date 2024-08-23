const ApiError = require('../error/ApiError');
const {PromStatus} = require('../models/models');

class PromStatusController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const newPromStatus = await PromStatus.create({
                name: name
            });
            return res.status(200).json({ newPromStatus });
        } catch (error) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allPromStatuses = await PromStatus.findAll();
            return res.status(200).json({ allPromStatuses });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const promStatus = await PromStatus.findByPk(req.params.id);
            if (!promStatus) {
                return res.status(404).json({ message: 'Promotion Status not found' });
            }
            promStatus.name = req.body.name;
            await promStatus.save();
            return res.status(200).json({ promStatus });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const promStatus = await PromStatus.findByPk(req.params.id);
            if (!promStatus) {
                return res.status(404).json({ message: 'Promotion Status not found' });
            }
            return res.status(200).json({ promStatus });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const promStatus = await PromStatus.findByPk(req.params.id);
            if (!promStatus) {
                return res.status(404).json({ message: 'Promotion Status not found' });
            }
            await promStatus.destroy();
            return res.status(204).json({ message: 'Promotion Status deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}
module.exports =  new PromStatusController();
