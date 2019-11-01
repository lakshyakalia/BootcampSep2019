const examDetailController= require('./examDetailController')
const questionDetail = require('./questionDetail')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const bcryptjs = require('bcryptjs')

const userRecord = async(req,res)=>{
    let body,response
    var hash = bcryptjs.hashSync(req.body.password,8)
    console.log(hash)
    req.body.password = hash
    response = await  userController.userRecord(req,res)
    return response
}

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
const viewExam = (req,res)=>{
    examDetailController.viewExam(req,res)
}
module.exports = {
    examDetail,
    studentPerformance,
userRecord,
    question,
    viewExam
}