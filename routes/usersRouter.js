const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const UsersController = require('../controllers/usersController');

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/user', ensureAuthenticated, UsersController.getUser);
router.post('/logout', UsersController.logout);

module.exports = router;