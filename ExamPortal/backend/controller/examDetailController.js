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
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        console.log(error)
        res.send({ error: error })
    }
}

module.exports = {
    examDetails
}