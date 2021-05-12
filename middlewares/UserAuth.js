const { verifyToken } = require('../modules/jwt')


async function UserAuth(req,res,next){
    let token = await verifyToken(req.headers.authorization)
    if(!token){
        res.redirect('/login')
    }else{
        req.user = token.email
    }
    next()
}

module.exports = UserAuth