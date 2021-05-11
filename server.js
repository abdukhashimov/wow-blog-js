const express = require('express')
const glob = require('glob')
const cookieParser = require('cookie-parser')
const mognoose = require('mongoose')

const app = express()


// PORT configs
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>console.log(`SERVER RUNNIN ON http://localhost:${PORT}`));

// Database connection
mognoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(console.log('Db connected  successfully!'));

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