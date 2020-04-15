const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/users', userController.getUsersController)
router.get('/users/:id', userController.getUserController)
router.post('/users', userController.createUserController)
router.put('/users/:id', userController.updateUserController)
router.delete('/users/:id', userController.deleteUserController)

module.exports = router