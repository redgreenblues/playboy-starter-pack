const express = require('express');

const PunsController = require('../controllers/punsController');

const router = express.Router();

router.post('/pun', PunsController.createPun);
router.get('/puns', PunsController.getPuns);
router.get('/pun/:id', PunsController.getPunById);
router.put('/pun/:id', PunsController.updatePun);
router.delete('/pun/:id', PunsController.deletePun);

module.exports = router;