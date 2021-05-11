const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const dbConnection = require('../storage/mongodb/mongo')

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



async function connectMongoBase(){
    let db = await dbConnection()
    return db.model('Users', userSchema)
}

async function createUser(firstname,lastname,email,password){
    let db = await connectMongoBase()
    return db.create({
        firstname,
        lastname,
        email,
        password
    })
}


module.exports = {
    createUser
}
