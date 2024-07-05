const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.put('/:id/delete', userController.delete);
router.put('/:id/restore', userController.restore);
router.get('/', userController.getAll);

module.exports = router;
