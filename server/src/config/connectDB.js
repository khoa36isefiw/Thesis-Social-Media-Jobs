require('dotenv').config();
const mongoose = require('mongoose');

mongoose
    .connect(`${process.env.CONNECTION_STRING}`, { useNewUrlparser: true })
    .then(() => {
        console.log('Connect to mongodb successfully !');
    })
    .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => {
    console.log(err);
});
