const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
        location: { type: String, required: true },
        jobType: {
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
        workplaceType: {
            type: String,
            enum: ['On-site', 'Hybrid', 'Remote'],
        },
        description: { type: String, required: true },
        skillRequirement: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
        receiveApplicantMethod: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Post', PostSchema);
