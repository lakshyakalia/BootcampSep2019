const express = require('express')
const Users = require('../controller/Users')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json("*/*"))


module.exports = () => {

    app.post('/signup', (req, res) => {
        Users.saveSignUpData(req, res)
    })
    return app
}
