const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemesSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        caption: String
    },
    {
        timestamps: true
    }
);

const Meme = mongoose.model('memes', MemesSchema);

module.exports = Meme;