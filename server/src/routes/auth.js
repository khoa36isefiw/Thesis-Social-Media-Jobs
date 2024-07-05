require('dotenv').config();
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/login/success', authController.loginSuccess);
router.get('/login/failed', authController.loginFailed);
router.get('/logout', authController.passportLogout);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed',
    }),
);
router.get('/facebook', passport.authenticate('facebook', { scope: ['profile', 'email'] }));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed',
    }),
);

router.get('/', (req, res) => {
    res.status(200).json('auths');
});

module.exports = router;
