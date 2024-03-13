const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostReactionSchema = new Schema(
    {
        postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        reaction: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('PostReaction', PostReactionSchema);
