const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    profileHeadline: { type: String },
    employmentType: {
        type: String,
        enum: [
            'Full-time',
            'Part-time',
            'Self-employed',
            'Freelancer',
            'Contract',
            'Intership',
            'Apprenticeship',
            'Seasonal',
        ],
    },
    startDate: { type: Date },
    endDate: { type: Date },
    locationType: {
        type: String,
        enum: ['On-site', 'Hybrid', 'Remote'],
    },
    employmentLocation: { type: String },
    employmentIndustry: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Experience', ExperienceSchema);
