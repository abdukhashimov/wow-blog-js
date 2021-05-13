const methods = require('../modelsMethods/Postmodel')
const { setupDB } = require('./test-setup')
const { v4: uuidv4 } = require('uuid');

setupDB()


test('Find Specific Post', async () => {
    let post = await methods.specificPost('c0687e9c-9ab6-4a28-abb2-67732e8a0ce9')
    expect(post).toBeTruthy()
}, 100000)


let creationPost;
test('Create New Post', async () => {
    creationPost = await methods.createPost(uuidv4(),'Basics of Golang', 'Golang is useful for carrying out programming for scalable servers and large software systems. The Golang programming language was built to fill in the gaps of C++ and Java that Google came across while working with its servers and distributed systems.','a336b4cd-013d-495c-8cc5-f108f982234a')
    expect(creationPost).toBeTruthy()
})


test('Edit Created Post', async () =>{
    let  editionPost;
    editionPost = await methods.editPost(creationPost._id,'Basics of Java Programming and OOP in Java programming','Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable.')
    expect(editionPost).toBeTruthy()
})



test('Delete Post', async ()=>{
    let deletePost = await methods.deletePost(creationPost._id)
    expect(deletePost).toBeTruthy()
})
