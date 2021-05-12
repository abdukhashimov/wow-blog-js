const router = require('express').Router()
const { compareHashedPass } = require('../modules/bcrypt')
const { UserUpdateValidator } = require('../validators/validate')
const db = require('../models/User')
const { generateToken } = require('../modules/jwt')

router.post('/', async (req,res)=>{
    try {
        let {email, password} = await UserUpdateValidator.validateAsync(req.body)
        let user = await db.findOne({email})
        if(!user) throw new Error('Email not found!')
        if(!compareHashedPass(password,user.password)) throw new Error('Password is incorrect!')
        let token = await generateToken({
            email:user.email
        })
        res.send({
            token:token
        })
    } catch (e) {
        res.status(403).send(e.message)
    }
    
})


module.exports = {
    router,
    path:'/login'
}