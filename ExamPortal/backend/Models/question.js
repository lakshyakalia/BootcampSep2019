const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const questionDetails = new Schema({
<<<<<<< HEAD
	qHeading: String,
	qText: String,
	qNo: Number,
	ans: String,
=======
	questionHeading: String,
	questionText: String,
	answer: String,
>>>>>>> eb590901e256ac9d957c06629c5bf3132d14f65d
	options:{
		option1: String,
		option2: String,
		option3: String,
		option4: String
	},
	weightage: Number,
	createdDate: {
		type: Date,
		default: Date.now
	},
	createdBy:String,
	modifiedDate: {
		type: Date,
		default: Date.now
	},
	modifiedBy:String,
	examCode: String
})

const questionDetail = mongoose.model('question',questionDetails)

	module.exports = {
		questionDetail
}
