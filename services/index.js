import sql from '../db.js'
class User {
    getAllUsers = async () => {
        const users = await sql.executeQuerry('SELECT * FROM Users')
        return users
    } 
    getOneUser = async (userId) => {
        const user = await sql.executeQuerry('SELECT * FROM Users WHERE ID = @userId', { userId })
        return user
    }
    createNewUser = async (userName, email) => {
        await sql.executeQuerry('INSERT INTO Users VALUES (@userName, @email)', {userName, email})
        return 1
    }
    updateUser = async (userId, userName, email) => {
        await sql.executeQuerry('UPDATE Users SET Name = @userName, Email = @email WHERE ID = @userId', { userName, email, userId })
        return userId
    }
    deleteUser = async (userId) => {
        await sql.executeQuerry('DELETE FROM Users WHERE ID = @userId', { userId })
        return userId
    }
}

export default new User()