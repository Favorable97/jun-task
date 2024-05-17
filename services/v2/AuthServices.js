import sql from '../../db.js'
class AuthServices {
    searchUser = async (username) => {
        const userId = await sql.executeQuery('SELECT ID FROM User_t WHERE Name = @username', { username })
        return userId
    }
    saveUser = async (username, email, password) => {
        await sql.executeQuery('INSERT INTO User_t VALUES (@username, @email, @password)', { username, email, password })
    }
}

export default new AuthServices()