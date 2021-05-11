const jwt = require('jsonwebtoken')

require('dotenv').config()

async function generateToken(data){
    let token = await jwt.sign(data,process.env.SECRET_WORD)
}

async function verifyToken(token){
    let isToken = await jwt.verify(token,process.env.SECRET_WORD)
}


module.exports = {
    generateToken,
    verifyToken
}