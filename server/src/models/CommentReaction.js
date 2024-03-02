const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentReactionSchema = new Schema(
    {
        commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        reaction: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('CommentReaction', CommentReactionSchema);
