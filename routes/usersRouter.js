const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/user', UsersController.getUser);
router.post('/logout', UsersController.logout);

module.exports = router;