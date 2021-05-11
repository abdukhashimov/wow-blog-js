const Joi = require('joi')

let UserValidator = Joi.object({
    firstname:Joi.string()
        .required()
        .error(new Error('Firstname is incorrect. Please check it!'))
        .min(3)
        .max(32),
    lastname:Joi.string()
        .required()
        .error(new Error('Lastname is incorrect. Please check it!'))
        .min(3)
        .max(32),
    email:Joi.string().email()
        .required()
        .error(new Error('Email is incorrect. Please check it!'))
        .min(3),
    password:Joi.string()
        .required()
        .error(new Error('Password is incorrect. Please check it!'))
        .min(5)
        .max(12)
})


let UserUpdateValidator = Joi.object({
    email:Joi.string().email()
        .required()
        .error(new Error("Email is incorrect. Please check it!"))
        .min(3),
    password:Joi.string() 
        .required()  
        .error(new Error('Password is incorrect. Please check it!'))
        .min(5)
        .max(12)
})

module.exports = {
    UserValidator,
    UserUpdateValidator
}
