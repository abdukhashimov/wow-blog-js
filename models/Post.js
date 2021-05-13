const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const postSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4(),
    },
    title: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        set: (val) => Math.round(val * 10) / 10,
    },
    free: {
        type: Boolean,
        default: true,
    },
    author: {
        type: String,
        ref: 'User',
        required:true
    },
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
        },
    ],
    tags: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Tag',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
});

postSchema.index({ price: 1, ratingsAverage: -1 });

module.exports = mongoose.model('Post', postSchema);
