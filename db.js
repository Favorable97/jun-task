import sql from 'mssql'
import config from 'config'

const pool = new sql.ConnectionPool(config.get('dbConfig'))

const executeQuery = async (query, params) => {
    console.log('Start to execute', query)
    try {
        await pool.connect()
        const request = pool.request()
        if (params) {
            for (let param in params) {
                request.input(param, params[param])
            }
        }
        const result = await request.query(query)
        console.log('Finish execute', query)
        return result.recordset
    } catch (error) {
        console.error(error.message)
        throw error
    } finally {
        if (pool.connected) {
            pool.close()
        }
    }
}

export default {
    executeQuery
} 