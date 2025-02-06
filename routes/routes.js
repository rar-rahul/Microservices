const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

//route handlers
router.post('/register',userController.register)
router.post('/login',userController.login)


//export router
module.exports = router