const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
    website: { type: String },
});

module.exports = mongoose.model('School', SchoolSchema);
