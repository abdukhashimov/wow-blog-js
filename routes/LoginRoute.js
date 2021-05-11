const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send('Login page')
})


module.exports = {
    router,
    path:'/login'
}