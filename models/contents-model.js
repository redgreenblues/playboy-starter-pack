const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCommentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    commentedBy: String,
    description: String
});

const ContentsSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        content: String,
        caption: String,
        comments: [subCommentSchema],
        likes: Number,
        hashtag: [String],
        contentType: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Content = mongoose.model('Contents', ContentsSchema);

module.exports = Content;