const express = require('express');
const router = express.Router();
const postController = require('../controllers/PostController');

router.get('/:id', postController.getById);
router.put('/:id', postController.update);
router.put('/:id/delete', postController.delete);
router.put('/:id/restore', postController.restore);
router.get('/all/available', postController.getAllAvailable);
router.get('/', postController.getAll);
router.post('/', postController.create);

module.exports = router;
