const express = require('express')
const glob = require('glob')
const cookieParser = require('cookie-parser')

const app = express()


// PORT configs
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>console.log(`SERVER RUNNIN ON http://localhost:${PORT}`));



// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


// Routes
glob('**/*Route.js',{realpath:true} ,(err, files)=>{
    files.forEach( (file)=>{
        let routeFile = require(file)
        app.use(routeFile.path,routeFile.router)
    } )
})