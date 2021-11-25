const { Router } = require('express')

const userController = require('../controller/userController')

const router = Router()

router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.patch('/user/:id', userController.updatePatchUser)
router.get('/user', userController.listUsers)
router.get('/user/:id', userController.getUserById)
router.delete('/user/:id', userController.deleteUser)

module.exports = router