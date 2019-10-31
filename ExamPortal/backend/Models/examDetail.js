const mongoose = require('mongoose')
    // console.log(mongoose.connection.models)
delete mongoose.connection.models['exam']

const Schema = mongoose.Schema

const exam = new Schema({
    examName: String,
    examCode: String,
    examinerId: String,
    instructions: String,
    examDuration: String,
    examStartTime: String
})

let examDetail = mongoose.model('exam', exam)
module.exports = {
    examDetail
}