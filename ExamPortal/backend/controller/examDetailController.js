const { examDetail } = require('../models/examDetail')

const examDetails = async (req, res) => {
    try {
        let examInformation = new examDetail(req.body)
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