const router = require('express').Router()

const { hasPermission } = require('../middlewares/hasPermission')
const UserAuth = require('../middlewares/UserAuth')
const Joi = require('joi')
const { createPost, editPost, specificPost, deletePost} = require('../modelsMethods/Postmodel')
const { findUserByEmail } = require('../modelsMethods/Usermodel')
const { v4: uuidv4 } = require('uuid');

const postJoiSchema = Joi.object({
    title:Joi.string()
        .trim()
        .required()
        .min(3)
        .max(100)
        .error(new Error('Title minimum length must be 3')),
    content:Joi.string()
        .required()
        .min(3)
        .max(1000)
        .error(new Error('Content minimum length must be 3'))
})

router.use(UserAuth)

router.post('/', hasPermission('create'), async(req,res) => {
    try {
        let { title, content } = await postJoiSchema.validateAsync(req.body)
        let user = await findUserByEmail(req.user)
        let post = await createPost(uuidv4(),title,content,user._id)
        res.send('Your post created!')
    } catch (e) {
        res.send(e.message)
    }
})



router.put('/:id', hasPermission('edit') ,async (req,res)=>{
    try {
        if(!req.params?.id) throw new Error('Post id not found')
        let { title, content } = await postJoiSchema.validateAsync(req.body)
        let isexistpost = await specificPost(req.params.id)
        if(!isexistpost) throw new Error('Post not found!')
        await editPost(isexistpost._id,title,content) 
        res.send('Your post successfully updated!')
    } catch (e) {
        res.send(e.message)
    }
})


router.delete('/:id', hasPermission('delete'), async (req, res)=>{
    try {
        if(!req.params?.id) throw new Error('Post id not found')
        let deletepost = await deletePost(req.params?.id)
        if(!deletepost) throw new Error('Post not found!')
        res.send('Your post successfully deleted!')
    } catch (e) {
        res.send(e.message)
    }
})

router.get('/:id', hasPermission('read'), async (req,res)=>{
    try {
       if(!req.params?.id) throw new Error('Post id not found')
       let specifictpost = await specificPost(req.params.id)
       if(!specifictpost) throw new Error('Post not found')
       res.send(specifictpost)
    } catch (e) {
        res.send(e.message)
    }
})


module.exports = {
    router,
    path:'/post'
}