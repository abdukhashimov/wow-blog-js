const router = require('express').Router()
const { createUser } = require('../dbmodels/Usermodel')
const { generateHashPass } = require('../modules/bcrypt')
const { UserValidator } = require('../validators/validate')

router.post('/', async (req, res) => {
    try {
        let {
            firstname,
            lastname,
            email,
            password
        } = await UserValidator.validateAsync(req.body)
        let user = await createUser(firstname,lastname,email,generateHashPass(password))
        if(!user) throw new Error('Something occured with Database. Please Try Again')
        res.send('You have registered successfully!')
    } catch (e) {
        res.status(403).send(e.message)
    }

})

module.exports = {
    router,
    path: "/register"
}