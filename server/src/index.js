require('dotenv').config();
require('./config/connectDB');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const route = require('./routes');
const PORT = process.env.PORT;

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ['http://localhost:3000'],
        methods: 'GET,POST,PUT,PATCH,DELETE', // Cho phép các phương thức GET và POST
        allowedHeaders: 'Content-Type,Authorization', // Cho phép các tiêu đề yêu cầu cụ thể
        credentials: true, // Cho phép truy cập với thông tin chứng thực
    }),
);

route(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
