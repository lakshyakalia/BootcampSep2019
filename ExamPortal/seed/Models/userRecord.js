const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	email: String,
	name: String,
	password:String,
	accType: String,
	collegeId: String,
	collegeName: String,
	phoneNumber: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	permissionLevel: Number
})

const user = mongoose.model('userSchema',userSchema)

module.exports = {
	user
}
