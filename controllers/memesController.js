const Meme = require('../models/memes-model');

module.exports = {
    async createdMeme(req, res) {
        const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a movie'
            })
        }

        const meme = new Meme(body);

        if (!meme) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        try {
            await meme.save();
            return res.status(201).json({
                success: true,
                id: meme._id,
                message: 'Meme created!'
            })
        } catch (err) {
            return res.status(400).json({
                err,
                message: 'Meme not created!'
            })
        }
    },
    async getMemes(req, res) {
        await Meme.find({}, (err, memes) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!memes.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Meme not found` })
            }
            return res.status(200).json({ success: true, data: memes })
        }).catch(err => console.log(err))
    },
    // getMemeById () {

    // },
    // updateMeme () {

    // },
    // deleteMeme () {

    // }
}