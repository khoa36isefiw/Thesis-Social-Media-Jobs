const bcrypt = require('bcrypt');
const Post = require('../models/Post');

const PostController = {
    getAll: async (req, res) => {
        try {
            const posts = await Post.findWithDeleted();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllAvailable: async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const post = await Post.create({
                content: req.body.content,
                ownerID: req.body.ownerID,
            });
            res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    update: async (req, res) => {
        try {
            if (req.body.userId === req.body.ownerID || req.body.isAdmin) {
                await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
                res.status(200).json({ message: 'Post has been updated' });
            } else return res.status(403).json({ message: 'You can update only your post!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    delete: async (req, res) => {
        try {
            if (req.body.userId === req.body.ownerID || req.body.isAdmin) {
                await Post.delete({ _id: req.params.id });
                res.status(200).json({ message: 'Post has been deleted' });
            } else
                return res
                    .status(403)
                    .json({ message: 'You dont have permission to delete a post!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    restore: async (req, res) => {
        try {
            if (req.body.isAdmin) {
                await Post.findByIdAndUpdate(req.params.id, { isActived: true });
                res.status(200).json({ message: 'Post has been restored' });
            } else
                return res
                    .status(403)
                    .json({ message: 'You dont have permission to perform this action!' });
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};
module.exports = PostController;
