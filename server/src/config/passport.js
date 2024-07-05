var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/User');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GG_CLIENT_ID,
            clientSecret: process.env.GG_CLIENT_SECRET,
            callbackURL: '/api/auth/google/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            // save the user into mongodb
            try {
                User.findOne({ email: profile.emails[0].value }).then(async (user) => {
                    if (user) {
                        done(null, user);
                    } else {
                        const newUser = await User.create({
                            email: profile.emails[0].value,
                            firstName: profile.name.givenName,
                            lastName: profile.name.familyName,
                            pictureUrl: profile.photos[0].value,
                        });
                        done(null, newUser);
                    }
                });
            } catch (error) {
                done(error, null);
            }
        },
    ),
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
