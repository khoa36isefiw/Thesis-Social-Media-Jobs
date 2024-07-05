const bcrypt = require('bcrypt');
const User = require('../models/User');

const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            if (req.body.userId === req.params.id || req.body.isAdmin) {
                if (req.body.password) {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                }
                await User.findByIdAndUpdate(req.params.id, { $set: req.body });
                res.status(200).json({ message: 'Account has been updated' });
            } else return res.status(403).json({ message: 'You can update only your account!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    delete: async (req, res) => {
        try {
            if (req.body.isAdmin) {
                await User.findByIdAndUpdate(req.params.id, { isActived: false });
                res.status(200).json({ message: 'Account has been deleted' });
            } else
                return res
                    .status(403)
                    .json({ message: 'You dont have permission to delete an account!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    restore: async (req, res) => {
        try {
            if (req.body.isAdmin) {
                await User.findByIdAndUpdate(req.params.id, { isActived: true });
                res.status(200).json({ message: 'Account has been restored' });
            } else
                return res
                    .status(403)
                    .json({ message: 'You dont have permission to perform this action!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};
module.exports = UserController;
