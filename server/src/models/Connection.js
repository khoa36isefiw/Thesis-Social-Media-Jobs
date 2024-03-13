const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema(
    {
        sentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        sentTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Connection', ConnectionSchema);
