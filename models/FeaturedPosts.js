const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const featuredPostsSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4(),
    },
    name: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Post',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('FeaturedPosts', featuredPostsSchema);
