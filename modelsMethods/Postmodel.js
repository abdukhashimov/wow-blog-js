const db = require('../models/Post')


async function createPost(_id,title,content,author) {
    let post = await db.create({
        _id,
        title,
        content,
        author
    })
    return post
}

async function deletePost(post_id) {
    let deletion = await db.deleteOne({_id:post_id})
    return deletion
}


async function editPost(post_id,title,content){
    let edition = await db.updateOne({_id:post_id},{title:title, content:content})
    return edition
}


async function specificPost(post_id){
    let specpost = await db.findOne({_id:post_id})
    return specpost
}


// async function deleteOneOnly(post_id){
//     let deletionOfPost = await db.deleteOne({_id:post_id})
//     return deletionOfPost
// }

module.exports = {
    createPost,
    deletePost,
    editPost,
    specificPost
}