const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        phone: { type: String, default: '' },
        address: { type: String, default: '' },
        photo: { type: String },
        type: { type: String },
        isAdmin: { type: Boolean, default: false },
        isActived: { type: Boolean, default: true },
        accessToken: { type: String, default: '' },
        refreshTokens: [{ type: String, default: '' }],
        accessCode: { type: String },
    },
    {
        timestamps: true,
    },
);

const FacultySchema = new Schema({
    isHeadDep: { type: Boolean, default: false },
    facultyId: { type: String, required: true },
    birthday: { type: Date },
    major: { type: String, ref: 'Major' },
});

const StudentSchema = new Schema({
    studentId: { type: String, required: true },
    birthday: { type: Date },
    major: { type: String, ref: 'Major' },
});

const User = mongoose.model('User', UserSchema);
const Student = User.discriminator('Student', StudentSchema);
const Faculty = User.discriminator('Faculty', FacultySchema);
const Administrator = User.discriminator('Administrator', UserSchema);
module.exports = {
    User,
    Student,
    Faculty,
    Administrator,
};
