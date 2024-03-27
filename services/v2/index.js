import sql from '../../db.js'
class User {
    getAllUsers = async () => {
        const users = await sql.executeQuerry('SELECT * FROM Person')
        return users
    } 
    getOneUser = async (personId) => {
        const user = await sql.executeQuerry('SELECT * FROM Person WHERE ID = @personId', { personId: personId })
        return user
    }
}

export default new User()