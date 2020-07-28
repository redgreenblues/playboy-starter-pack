const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentsSchema = new Schema(
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

const Content = mongoose.model('contents', ContentsSchema);

module.exports = Content;