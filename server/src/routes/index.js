const userRouter = require('./userRouter');
function route(app) {
    app.use('/api/users', userRouter);

    app.use('/', (req, res) => {
        res.status(200).json('Hello world');
    });
}
module.exports = route;
