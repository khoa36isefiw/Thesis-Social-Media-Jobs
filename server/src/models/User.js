const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    pictureUrl: { type: String },
    contactInfor: { type: Object },
    location: { type: String },
    headline: { type: String },
    resume: { type: String },
    coverLetter: { type: String },
    isActived: { type: Boolean, default: true },
    accessToken: { type: String },
    refreshTokens: [{ type: String }],
});

module.exports = mongoose.model('User', UserSchema);
