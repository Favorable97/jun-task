import { Router } from 'express'
import AuthController from '../../controllers/v2/AuthController.js'

const router = Router()

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)

export default {
    router
}