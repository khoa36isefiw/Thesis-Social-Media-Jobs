const bcrypt = require('bcrypt');
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
            console.log('user: ', user);
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
};
module.exports = AuthController;
