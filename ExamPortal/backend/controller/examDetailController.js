<<<<<<< HEAD
const {examDetail} = require('../Models/examDetail')

const examDetails = async (req, res) => {
    try {
        // console.log()
        let examInformation = new examDetail(req.body)
=======
const { examDetail } = require('../models/examDetail')

const examDetails = async (req, res) => {
    try {
        let examInformation = new examDetail({
            examName: req.body.examName,
            examCode: req.body.examCode,
            examinerId: req.body.examinerId,
            instructions: req.body.instructions,
            examDuration: req.body.examDuration,
            examStartTime:req.body.examStartTime
        })
        console.log(examInformation)
>>>>>>> 170cfbb6f816f4feeb768d2aead1cc24cefff27c
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        console.log(error)
<<<<<<< HEAD
        res.send({ error })
=======
        res.send({ error: error })
>>>>>>> 170cfbb6f816f4feeb768d2aead1cc24cefff27c
    }
}

module.exports = {
    examDetails
}