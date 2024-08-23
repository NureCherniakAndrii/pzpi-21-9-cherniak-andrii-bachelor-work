const ApiError = require('../error/ApiError');
const {Trening} = require('../models/models');

class TreningController {


    async create(req, res, next) {
        try {
            const {userId} = req.body;
            const newArr = userId.map(id => +id);
            const newTrening = await Trening.create({
                title: req.body.title,
                description: req.body.description,
                duration: req.body.duration,
                userId: newArr
            });
            return res.status(200).json({newTrening});
        } catch (error) {
            console.log(error);
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allTrenings = await Trening.findAll();

            return res.status(200).json({allTrenings});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const trening = await Trening.findByPk(req.params.id);

            if (!trening) {
                return next(ApiError.badRequest('Trening not found'));
            }

            trening.title = req.body.title;
            trening.description = req.body.description;
            trening.duration = req.body.duration;
            trening.userId = req.body.userId;
            await trening.save();

            return res.status(200).json({trening});
        } catch (e) {
            console.log(e);
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const trening = await Trening.findByPk(req.params.id);

            if (!trening) {
                return next(ApiError.badRequest('Trening not found'));
            }

            return res.status(200).json({trening});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            await Trening.destroy({
                where: {id: req.params.id}
            })

            return res.status(204).json({message: "Item deleted"})
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports = new TreningController();