const {questionDetail} = require('../Models/question')

const questions = async (req, res) => {
    try {
        console.log(req.body)
        let questionInformation = new questionDetail(req.body)
        await questionInformation.save()
        res.status(200).send({ msg: 'question saved successful' })
    } 
    catch (error) {
        res.send({ error })
    }
}

module.exports = {
    questions
}
