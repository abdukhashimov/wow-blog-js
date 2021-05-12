const db = require('../models/Post')


async function createPost(title,content,author) {
    let post = await db.create({
        title,
        content,
        author
    })
    return post
}

async function deletePost(post_id) {
    let deletion = await db.findOneAndDelete({_id:post_id})
    return deletion
}


async function editPost(post_id,title,content){
    let edition = await db.findOneAndUpdate(({_id:post_id},{title,content}))
    return edition
}


async function specificPost(post_id){
    let specpost = await db.findOne({_id:post_id})
    return specpost
}


module.exports = {
    createPost,
    deletePost,
    editPost,
    specificPost
}