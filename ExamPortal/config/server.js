const express = require('express')
const bodyParser = require('body-parser')
const { PORT } =require('./config')
// const path = require('path')
const { db } = require("../connection")

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(bodyParser.json())

db.sync({force:false})

.then(()=>{
    console.log('db synced')
    app.listen(PORT,()=> console.log(`Your server is running on ${PORT}`))
});

module.exports = {
    app
}
