const ApiError = require('../error/ApiError');
const {Product} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class ProductController {

    async create(req, res, next) {
        try{
            const {
                name,
                barcode,
                storeId,
                count
            } = req.body;

            const {photo} = req.files || req.body;
            let fileName = photo;

            if (typeof photo !== 'string') {
                fileName = uuid.v4() + '.jpg';
                photo.mv(path.resolve(__dirname, '..', 'static', fileName));
            }

            const newProduct = await Product.create({
                name,
                barcode,
                storeId,
                count,
                photo: fileName
            })

            return res.status(200).json({product: newProduct})

        } catch (e) {
            console.log(e);
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allProducts = await Product.findAll();
            return res.status(200).json({products: allProducts});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getAllByStore(req, res, next) {
        try {
            const allProducts = await Product.findByPk(req.params.id);
            return res.status(200).json({products: allProducts});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async changeCountById(req, res, next) {
        try {
            const product = await Product.findByPk(req.params.id);

            product.count = req.body.count;

            await product.save();

            return res.status(200).json({product});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getCountByBarcode(req, res, next) {
        try {
            const product = await Product.findOne({
                where: {
                    barcode: req.params.barcode
                }
            });

            return res.status(200).json({count: product.count, name: product.name});
        } catch (e) {
            console.log(e);
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const product = await Product.findByPk(req.params.id);
            await product.destroy();

            return res.status(200).json({message: 'Successfully destroyed'});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports = new ProductController();