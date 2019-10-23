const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const testSchema = new Schema({
	stdId: String,
	totalScore: Number,
	completionTime : {
		type: Date,
		default: Date.now
	},
	answers: [
		{
			answerSubmitted : String,
			questionId: String
		}
	]
})

const test = mongoose.model('testSchema',testSchema)

module.exports = {
	test
}