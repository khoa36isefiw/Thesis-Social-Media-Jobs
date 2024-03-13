const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
        content: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Comment', CommentSchema);
