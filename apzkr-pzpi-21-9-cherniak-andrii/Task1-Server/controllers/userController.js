const ApiError = require('../error/ApiError');
const {User, Basket} = require('../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateJWT = (user) => {
    return jwt.sign(
        {
            id: user.id,
            role: user.role,
            email: user.email
        },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

const verifyAndDecodeToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return {message: "Token is expired", status: false};
        } else {
            return {status: true, data: decoded};
        }
    });
}

class UserController {
    async registration(req, res, next) {
        const {
            email,
            name,
            surname,
            password
        } = req.body;

        try {

            // const candidate = await User.findOne({where: {email}});

            // if (candidate) {
            //     return next(ApiError.badRequest('User is exist'));
            // }

            const encryptedPassword = await bcrypt.hash(password, 5);
            const user = await User.create({
                email,
                name,
                surname,
                password: encryptedPassword
            });

            const token = generateJWT(user);

            return res.status(200).json({token});

        } catch (e) {
            console.log(e);
            return next(ApiError.internal());
        }
    }


    async login(req, res, next) {
        const {email, password} = req.body;

        try {
            const candidate = await User.findOne({where: {email}});

            if (!candidate) {
                return next(ApiError.badRequest('No such user exist. Check you email address'));
            }

            const passCheck = bcrypt.compare(password, candidate.password);

            if (!passCheck) {
                return next(ApiError.badRequest('Password is incorrect'));
            }

            const token = generateJWT(candidate);

            return res.status(200).json({token});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await User.findAll();

            return res.status(200).json({users});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getAllUserByRole(req, res, next) {
        try {
            const {role} = req.body;
            const users = await User.findAll({where: {role}});

            return res.status(200).json({role: users});
        } catch (e) {
            return next(ApiError.internal());
        }
    }

    async getOne(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1];
            const decodedData = jwt.verify(token, process.env.SECRET_KEY);

            return res.status(200).json(decodedData);

        } catch (e) {
            next(ApiError.badRequest('Invalid token'))
        }
    }

    async checkToken(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1];
            const check = verifyAndDecodeToken(token);

            if(check.status) {
                return res.status(200).json({status: check.status});
            } else {
                return res.status(200).json({status: check.status});
            }

        } catch (e) {
            return next(ApiError.badRequest('Invalid token'));
        }
    }
}

module.exports = new UserController;