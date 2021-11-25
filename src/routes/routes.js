const { Router } = require('express')

const userController = require('../controller/userController')

const router = Router()

router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.get('/user', userController.listUsers)
router.delete('/user/:id', userController.deleteUser)

module.exports = router