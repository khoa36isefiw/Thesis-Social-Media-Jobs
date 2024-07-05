const userRouter = require('./user');
const authRouter = require('./auth');
const postRouter = require('./post');
function route(app) {
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/posts', postRouter);

    app.use('/', (req, res) => {
        res.status(200).json("Welcome to summoner's rifts!");
    });
}
module.exports = route;
