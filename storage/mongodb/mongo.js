const mongoose = require('mongoose')

require('dotenv').config()

module.exports = async ()=>{
    return await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true 
    })
}

