const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
