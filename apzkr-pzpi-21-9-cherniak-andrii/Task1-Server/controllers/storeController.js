const ApiError = require('../error/ApiError');
const {Store} = require('../models/models');
const path = require('path');
const uuid = require('uuid');

class StoreController {

    async create(req, res, next) {
        try {
            const { address, name } = req.body;

            const {photo} = req.files || req.body;
            let fileName = photo;

            if(typeof photo !== 'string'){
                fileName = uuid.v4() + '.jpg';
                photo.mv(path.resolve(__dirname, '..', 'static', fileName));
            }

            const newStore = await Store.create({
                address: address,
                photo: fileName,
                name: name
            });
            return res.status(200).json({ newStore });
        } catch (error) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allStores = await Store.findAll();
            return res.status(200).json({ allStores });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const store = await Store.findByPk(req.params.id);
            if (!store) {
                return res.status(404).json({ message: 'Store not found' });
            }

            const {photo} = req.files || req.body;
            let fileName = photo;

            if(typeof photo !== 'string'){
                fileName = uuid.v4() + '.jpg';
                photo.mv(path.resolve(__dirname, '..', 'static', fileName));
            }

            store.address = req.body.address;
            store.photo = fileName;
            store.name = req.body.name;

            await store.save();
            return res.status(200).json({ store });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const store = await Store.findByPk(req.params.id);
            if (!store) {
                return res.status(404).json({ message: 'Store not found' });
            }
            return res.status(200).json({ store });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const store = await Store.findByPk(req.params.id);
            if (!store) {
                return res.status(404).json({ message: 'Store not found' });
            }
            await store.destroy();
            return res.status(204).json({ message: 'Store deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new StoreController();
