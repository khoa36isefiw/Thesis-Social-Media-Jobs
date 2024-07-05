require('dotenv').config();
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            message: 'success',
            user: req.user,
        });
    }
});
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        message: 'failure',
    });
});
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed',
    }),
);
router.get('/', (req, res) => {
    res.status(200).json('auths');
});

module.exports = router;
