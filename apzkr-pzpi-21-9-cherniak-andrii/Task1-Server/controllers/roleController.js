const ApiError = require('../error/ApiError');
const {Role} = require('../models/models');

class RoleController {

    async create(req, res, next) {
        try {
            const { name } = req.body;
            const newRole = await Role.create({
                name: name
            });
            return res.status(200).json({ newRole });
        } catch (error) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const allRoles = await Role.findAll();
            return res.status(200).json({ allRoles });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async update(req, res, next) {
        try {
            const role = await Role.findByPk(req.params.id);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            role.name = req.body.name;
            await role.save();
            return res.status(200).json({ role });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try {
            const role = await Role.findByPk(req.params.id);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            return res.status(200).json({ role });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async delete(req, res, next) {
        try {
            const role = await Role.findByPk(req.params.id);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            await role.destroy();
            return res.status(204).json({ message: 'Role deleted' });
        } catch (e) {
            return next(ApiError.internal());
        }
    }

}

module.exports =  new RoleController();
