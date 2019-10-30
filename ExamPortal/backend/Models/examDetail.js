const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const exam = new Schema({
	examName: String,
	examCode: String,
	examinerId: String,
	instructions: String,
	examDuration: String,
	examStartTime:String
})

const examDetail = mongoose.model('exam',exam)
<<<<<<< HEAD

=======
>>>>>>> eb590901e256ac9d957c06629c5bf3132d14f65d
module.exports = {
 examDetail
}
