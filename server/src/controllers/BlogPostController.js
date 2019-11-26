const {BlogPost} = require('../models')
const {User} = require('../models')

module.exports = {
    async get (req, res) {
        try {
            const blogPosts = await BlogPost.findAll({
                include: [
                    {
                        model: User
                    }
                ]
            })
            res.send(blogPosts)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error fetching blogs.'
            })
        }
    },
    async post (req, res) {
        try {
            const blogPost = await BlogPost.create(req.body)
            res.send(blogPost)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error posting blog.'
            })
        }
    }
}