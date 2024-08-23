const ApiError = require('../error/ApiError');
const {Promotion} = require('../models/models');

class PromotionController {

    async create(req, res, next) {
        try {
            const { title, text, promStatusId, storeId } = req.body;
            const newPromotion = await Promotion.create({
                title: title,
                text: text,
                promStatusId: promStatusId,
                storeId: storeId.map(el => +el)
            });
            return res.status(200).json({ newPromotion });
        } catch (error) {
            console.log(error);
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allPromotions = await Promotion.findAll();
            return res.status(200).json({ allPromotions });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (!promotion) {
                return res.status(404).json({ message: 'Promotion not found' });
            }
            promotion.title = req.body.title;
            promotion.text = req.body.text;
            promotion.promStatusId = req.body.promStatusId;
            promotion.storeId = req.body.storeId;
            await promotion.save();
            return res.status(200).json({ promotion });
        } catch (e) {
            console.log(e);

            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (!promotion) {
                return res.status(404).json({ message: 'Promotion not found' });
            }
            return res.status(200).json({ promotion });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (!promotion) {
                return res.status(404).json({ message: 'Promotion not found' });
            }
            await promotion.destroy();
            return res.status(204).json({ message: 'Promotion deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new PromotionController();
