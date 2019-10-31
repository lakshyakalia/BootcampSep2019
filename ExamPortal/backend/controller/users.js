const examDetailController= require('./examDetailController')
const questionDetail = require('./questionDetail')

const question = (req,res)=>{
   
    questionDetail.questions(req,res)
}

const examDetail = (req,res)=>{
    
    examDetailController.examDetails(req,res)
}
module.exports={
    examDetail,
    question
}