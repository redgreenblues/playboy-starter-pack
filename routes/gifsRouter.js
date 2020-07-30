const express = require('express');
const router = express.Router();

const GifsController = require('../controllers/gifsController');


router.post('/gif', GifsController.createGif);
router.get('/gifs', GifsController.getGifs);
router.get('/gif/:id', GifsController.getGifById);
router.put('/gif/:id', GifsController.updateGif);
router.delete('/gif/:id', GifsController.deleteGif);

module.exports = router;