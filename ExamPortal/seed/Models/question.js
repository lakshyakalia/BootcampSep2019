const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
	qHeading: String,
	qText: String,
	qNo: Number,
	ans: String,
	options:{
		op1: String,
		op2: String,
		op3: String,
		op4: String
	},
	weightage: Number,
	time: {
		type: Date,
		default: Date.now
	},
	examCode: String
})

const question = mongoose.model('questionSchema',questionSchema)

module.exports = {
	question
}
