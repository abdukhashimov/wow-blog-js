const methods = require('../modelsMethods/Usermodel')
const { setupDB } = require('./test-setup')
const { v4: uuidv4 } = require('uuid');

setupDB()

let user 
test('Create New User', async () =>{
    user = await methods.createUser('Karim','Karimov','karim@gmail.com','karim1234@')
    expect(user).toBeTruthy()
})

test('Find User', async ()=>{
    try{
        let isAvailable = await methods.findUserByEmail(user.email)
        expect(isAvailable).toBeTruthy()
    }
    finally{
        await  methods.deleteUser(user.email)
    }
})

