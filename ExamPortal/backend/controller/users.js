const examDetailController= require('./examDetailController')
const questionDetail = require('./questionDetail')

const question = (req,res)=>{
   
    questionDetail.questions(req,res)
}

const examDetail = (req,res)=>{
    
    examDetailController.examDetails(req,res)
}

const getexamDetail = (req,res)=>{
    console.log("hello1")
    examDetailController.getexamDetails(req,res)
}

module.exports={
    examDetail,
    question,
    getexamDetail
}