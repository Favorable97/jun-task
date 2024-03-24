import services from '../services/index.js'
class User {
    getAllUsers = async (req, res) => {
        try {
            const users = await services.getAllUsers()
            res.send({
                message: 'Success',
                data: users
            })
        } catch (error) {
            res.status(200).send({
                message: 'Error',
                data: error.message
            })
        }
    }
    getOneUser = async (req, res) => {
        try {
            const userId = req.params.userId
            const user = await services.getOneUser(userId)
            res.status(200).send({
                message: 'Success',
                data: user
            })
        } catch (error) {
            res.send({
                message: 'Error',
                data: error.message
            })
        }
    }
    createNewUser = async (req, res) => {
        try {
            const {userName, email} = req.body
            if (!userName || !email) {
                throw new Error('Не указаны обязательные поля!')
            }
            await services.createNewUser(userName, email)
            res.status(201).send({
                message: 'Success',
                data: {userName, email}
            })
        } catch (error) {
            res.send({
                message: 'Error',
                data: error.message
            })
        }
    }
    updateUser = async (req, res) => {
        try {
            const user = req.body
            if (!user.userId || !user.userName || !user.email) {
                throw new Error('Не указаны обязательные поля!')
            }
            await services.updateUser(user.userId, user.userName, user.email)
            res.status(202).send({
                message: 'Success',
                data: user
            })
        } catch (error) {
            res.send({
                message: 'Error',
                data: error.message
            })
        }
    }
    deleteUser = async (req, res) => {
        try {
            const userId = req.params.userId
            console.log(userId)
            await services.deleteUser(userId)
            res.status(202).send({
                message: 'Success',
                data: userId
            })
        } catch (error) {
            res.send({
                message: 'Error',
                data: error.message
            })
        }
    }
}

export default new User()