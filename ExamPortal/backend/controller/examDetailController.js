const {examDetail} = require('../Models/examDetail')

const examDetails = async (req, res) => {
    try {
        // console.log()
        let examInformation = new examDetail(req.body)
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        console.log(error)
        res.send({ error })
    }
}

module.exports = {
    examDetails
}