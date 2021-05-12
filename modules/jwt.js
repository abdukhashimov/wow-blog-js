const jwt = require('jsonwebtoken')

require('dotenv').config()

async function generateToken(data){
    let token = await jwt.sign(data,process.env.SECRET_WORD)
    return token
}

async function verifyToken(token){
    let isToken = await jwt.verify(token,process.env.SECRET_WORD)
    return isToken
}


module.exports = {
    generateToken,
    verifyToken
}