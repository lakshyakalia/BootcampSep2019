const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const candidateAnswer = new Schema({
	candidateId: String,
	totalScore: Number,
	testCode:String, //Must be unique 
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

const test = mongoose.model('candidateAnswer',candidateAnswer)

module.exports = {
	test
}
