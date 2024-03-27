import services from '../services/v2/index.js'
import response from '../response/response.js'
class User {
    getAllUsers = async (req, res) => {
        try {
            const users = await services.getAllUsers()
            response.handleSuccess(res, 200, users)
        } catch (error) {
            response.handleError(res, 500, error)
        }
    }
    getOneUser = async (req, res) => {
        try {
            const userId = req.params.userId
            const user = await services.getOneUser(userId)
            response.handleSuccess(res, 200, user)
        } catch (error) {
            response.handleError(res, 500, error)
        }
    }
    createNewUser = async (req, res) => {
        try {
            const {userName, email} = req.body
            if (!userName || !email) {
                throw new Error('Не указаны обязательные поля!')
            }
            await services.createNewUser(userName, email)
            response.handleSuccess(res, 201, {userName, email})
        } catch (error) {
            response.handleError(res, 500, error)
        }
    }
    updateUser = async (req, res) => {
        try {
            const user = req.body
            if (!user.userId || !user.userName || !user.email) {
                throw new Error('Не указаны обязательные поля!')
            }
            await services.updateUser(user.userId, user.userName, user.email)
            response.handleSuccess(res, 202, user)
        } catch (error) {
            response.handleError(res, 500, error)
        }
    }
    deleteUser = async (req, res) => {
        try {
            const userId = req.params.userId
            console.log(userId)
            await services.deleteUser(userId)
            response.handleSuccess(res, 202, userId)
        } catch (error) {
            response.handleError(res, 500, error)
        }
    }
}

export default new User()