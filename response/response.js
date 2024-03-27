class ResponseUtils {
    static handleSuccess(res, status, data) {
        res.status(status).send({
            message: 'Success',
            data: data
        })
    }
    static handleError(res, status, error) {
        res.status(status).send({
            message: 'Error',
            data: error.message
        })
    }
}

export default ResponseUtils