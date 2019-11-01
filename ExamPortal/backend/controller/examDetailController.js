const  exam  = require('../models/examDetail')

const examDetails = async(req, res) => {
    try {
        let examInformation = new exam(req.body)
       // console.log(examInformation)
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        console.log(error)
        res.send({ error: error })
    }
}
const viewExam = async(req,res)=>{
    try{
        
    }
    catch( error){
        console.log(error)
    }
}
module.exports = {
    examDetails,
    viewExam
}