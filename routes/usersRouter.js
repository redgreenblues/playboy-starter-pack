const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const UsersController = require('../controllers/usersController');

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/user', ensureAuthenticated, UsersController.getUser);
router.get('/logout', UsersController.logout);
router.put('/update/:id', ensureAuthenticated, UsersController.updateUser);


module.exports = router;