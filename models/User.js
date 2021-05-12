const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

let roles = {
    user: {
        name: 'user',
        operations: ['read', 'edit','create','delete']
    },
    admin: {
        name: 'admin',
        operations: ['read','delete','edit']
    },
    manager: {
        name: 'manager',
        operations: ['read','edit']
    }
}

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4(),
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type: Object,
        default: roles.manager,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
    },
    intgerested_categories: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
        },
    ],
    intgerested_tags: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Tag',
        },
    ],
    address: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
    },
});


module.exports = mongoose.model("users", userSchema)
