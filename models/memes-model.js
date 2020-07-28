const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemesSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        content: String,
        caption: String,
        contentType: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Meme = mongoose.model('memes', MemesSchema);

module.exports = Meme;