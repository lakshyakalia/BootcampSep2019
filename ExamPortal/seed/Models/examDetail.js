const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
	examName: String,
	examCode: String,
	facultyId: String,
	instructions: String,
	examDuration: String
})

const exam = mongoose.model('examSchema',examSchema)

module.exports = {
 exam
}


