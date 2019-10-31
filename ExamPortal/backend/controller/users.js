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
module.exports = {
    examDetails,
    studentPerformance,
   question
}