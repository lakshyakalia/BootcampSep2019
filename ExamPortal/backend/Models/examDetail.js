const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exam = new Schema({
    examName: String,
    examCode: String,
    examinerId: String,
    instructions: String,
    examDuration: String,
    examStartTime: String,
})

module.exports = mongoose.model('exam', exam)
