const express = require('express');

const MemesController = require('../controllers/memesController');

const router = express.Router();

router.post('/meme', MemesController.createMeme);
router.get('/memes', MemesController.getMemes);
router.get('/meme/:id', MemesController.getMemeById);
router.put('/meme/:id', MemesController.updateMeme);
router.delete('/meme/:id', MemesController.deleteMeme);

module.exports = router;