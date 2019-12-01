const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const BlogPostController = require('./controllers/BlogPostController')
const UserController = require('./controllers/UserController')

module.exports = app => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )

  app.get('/blogs',
    BlogPostController.get
  )
  app.post('/blogs',
    BlogPostController.post
  )
  app.delete('/blogs',
    BlogPostController.delete
  )

  app.get('/users',
    UserController.get
  )
  app.put('/users/:userId',
    UserController.put
  )
  // app.post('/users',
  //     UserController.post
  // )
  // app.delete('/users',
  //     UserController.delete
  // )
}
