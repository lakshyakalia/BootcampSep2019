const questionDetail = require('../Models/question')

const questions = async (req, res) => {
    try {
        let questionInformation = new questionDetail(req.body)
        await questionInformation.save()
        res.status(200).send({ msg: 'question saved successful' })
    } 
    catch (error) {
        res.send({ error })
    }
}

const getQuestionDetails = async (req,res) =>{
    try{
     let values= await questionDetail.find();
     res.status(200).send( values)
    }
    catch(error){
     console.log(error)
    }
}

module.exports = {
    questions,
    getQuestionDetails
}
