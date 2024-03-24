import { Router } from 'express'
import controller from '../../controllers/index.js'

const router = Router()

router.get('/', controller.getAllUsers)
router.get('/:userId', controller.getOneUser)
router.post('/', controller.createNewUser)
router.put('/', controller.updateUser)
router.delete('/:userId', controller.deleteUser)


export default {
    router
}