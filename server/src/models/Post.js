const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        content: { type: String, required: true },
        ownerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    },
);
PostSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Post', PostSchema);
