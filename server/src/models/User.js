const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        index: true,
        validate: {
            validator: function (str) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message: (props) => `${props.value} is not a valid email`,
        },
    },
    password: { type: String, min: 6 },
    firstName: { type: String },
    lastName: { type: String },
    pictureUrl: { type: String, default: '' },
    coverPictureUrl: { type: String, default: '' },
    contactInfor: { type: Object },
    location: { type: String, default: '' },
    headline: { type: String, default: '' },
    resume: { type: String, default: '' },
    coverLetter: { type: String, default: '' },
    isActived: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
    accessToken: { type: String },
    refreshTokens: [{ type: String }],
});
UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('User', UserSchema);
