const exam = require('../Models/examDetail')

const examDetail = async (req, res) => {
    try {
        console.log('log')
        let examInformation = new exam(req.body)
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        res.send({ error })
    }
}

module.exports = {
    examDetail
}