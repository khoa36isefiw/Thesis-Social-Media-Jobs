const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    degree: { type: String },
    fieldOfStudy: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    grade: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Education', EducationSchema);
