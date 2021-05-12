const { verifyToken } = require("../modules/jwt")
const { findUserByEmail } = require("../dbmodels/Usermodel")

function hasPermission(operation){
    return async (req,res,next) =>{
        let token = await verifyToken(req.headers.authorization)
        if(!token) res.status(403).send('Token not found!')
        let user = await  findUserByEmail(token.email)
        if(!user) res.status(403).send('User not found!')
        if(user.role.operations.indexOf(operation)!=-1){
            next()
        }else{
            res.status(403).send('You do not have permission to this operation!')
        }
    }
}


module.exports = {
    hasPermission
}