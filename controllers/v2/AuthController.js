import services from '../../services/v2/AuthServices.js'
import response from '../../response/response.js'
import bcrypt from 'bcryptjs'

class AuthController {
    registration = async (req, res) => {
        console.log('Start registration user')
        try {
            const {username, email, password} = req.body
            const candidate = await services.searchUser(username)
            if (candidate.length > 0) {
                console.log('Пользователь с таким именем уже существует')
                throw new Error('Пользователь с таким именем уже существует')
            }
            const hashPassword = bcrypt.hashSync(password, 4);
            const user = {
                username: username,
                email: email,
                password: hashPassword
            }
            await services.saveUser(user.username, user.email, user.password)
            response.handleSuccess(res, 200, 'Пользователь успешно зарегистрирован')
        } catch (error) {
            console.log(error)
            response.handleError(res, 400, error)
        }
    }
    login = async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error)
            response.handleError(res, 400, error)
        }
    }
}

export default new AuthController()