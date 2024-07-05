require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const AuthController = {
    register: async (req, res) => {
        try {
            const saltRounds = 10;
            const hash = bcrypt.hashSync(req.body.password, saltRounds);

            const newUser = await User.create({
                email: req.body.email,
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                location: req.body.location,
                headline: req.body.headline,
                password: hash,
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Wrong password' });
            }
            // thêm accessToken vào trả về cho client
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    loginSuccess: (req, res) => {
        if (req.user) {
            res.status(200).json({
                message: 'success',
                user: req.user,
            });
        }
    },
    loginFailed: (req, res) => {
        res.status(401).json({
            message: 'failure',
        });
    },

    passportLogout: (req, res) => {
        req.logout();
        res.redirect(process.env.CLIENT_URL);
    },

    generateAccessToken: (user) => {
        const accessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' },
        );
        return accessToken;
    },
    // Tạo refreshToken
    generateRefreshToken: (user) => {
        const refreshToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' },
        );
        return refreshToken;
    },
};
module.exports = AuthController;
