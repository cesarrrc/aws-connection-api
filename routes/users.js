const express = require('express')
const router = express.Router()
const usersConteroller = require('../controller/users')

router.post('/api', usersConteroller.newUser, usersConteroller.newUserTable)

module.exports = router