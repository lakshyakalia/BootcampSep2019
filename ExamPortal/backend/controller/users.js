<<<<<<< HEAD
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
=======
const examController = require('./examDetailController')

const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}
module.exports={
    examDetails
>>>>>>> 170cfbb6f816f4feeb768d2aead1cc24cefff27c
}