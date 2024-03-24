import express from 'express'
import config from "config"
import bodyParser from 'body-parser'
import routes from "./v1/routes/index.js"

const PORT = process.env.PORT || config.get('PORT')
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes.router)

app.listen(PORT, () => {
    console.log('Сервер запущен на порте', PORT)
})