const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const PunsController = require('../controllers/punsController');

router.post('/pun', ensureAuthenticated, PunsController.createPun);
router.get('/puns', ensureAuthenticated, PunsController.getPuns);
router.get('/pun/:id', ensureAuthenticated, PunsController.getPunById);
router.put('/pun/:id', ensureAuthenticated, PunsController.updatePun);
router.delete('/pun/:id', ensureAuthenticated, PunsController.deletePun);

module.exports = router;