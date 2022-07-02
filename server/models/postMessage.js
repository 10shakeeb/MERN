import mongoose from 'mongoose';

const postScehma = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date ()
    },

});

const PostMessage = mongoose.model('PostMessage', postScehma);

export default PostMessage;