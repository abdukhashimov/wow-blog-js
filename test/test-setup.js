const mongoose = require('mongoose')


module.exports = {
    setupDB() {
        // Connect to Mongoose
        beforeAll(  async (done) => {
            let db = await mongoose.connect(`mongodb+srv://Samandar:PWAwXBrxZYlS8DX8@cluster0.i31hr.mongodb.net/BlogAuth?retryWrites=true&w=majority`,{
                useNewUrlParser:true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })

            done()
        })

        // Disconnect Mongoose
        afterAll(async (done) => {
            try {
                let disBase = await mongoose.connection.close()
                done()
            } catch (e) {
                done()
            }
        })
    }
}
