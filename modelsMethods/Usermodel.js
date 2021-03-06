const db = require('../models/User')

async function  createUser(firstname,lastname,email,password) {
    return await db.create({
        firstname,
        lastname,
        email,
        password
    })    
}

async function findUserByEmail(email){
    return await db.findOne({email})
}

async function deleteUser(email){
    return await db.deleteOne({email})
}
module.exports = {
    createUser,
    findUserByEmail,
    deleteUser
}