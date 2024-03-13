const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
    website: { type: String },
    about: { type: String },
});

module.exports = mongoose.model('Company', CompanySchema);
