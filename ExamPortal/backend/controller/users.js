const examDetailController= require('./examDetailController')
const questionDetail = require('./questionDetail')
const studentPerformanceController = require('./studentPerformance')

const question = (req,res)=>{
   
    questionDetail.questions(req,res)
}

const examDetail = (req,res)=>{
    
    examDetailController.examDetails(req,res)
}   
  
const studentPerformance = (req, res) => {
    //console.log("yes yes")
    studentPerformanceController.viewPerformance(req, res)
}

const getexamDetail = (req,res)=>{
    //console.log("hello1")
    examDetailController.getexamDetails(req,res)
}

const getQuestionDetail = (req,res)=>{
    //console.log("hello1")
    questionDetail.getQuestionDetails(req,res)
}

module.exports={
    examDetail,
    question,
    getexamDetail,
    getQuestionDetail
}