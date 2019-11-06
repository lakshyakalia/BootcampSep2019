const examController = require('./examDetailController')
const questionDetail = require('./questionController')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const bcryptjs = require('bcryptjs')
const testInfo = require('./testDetails')

const userRecord = async(req,res)=>{
    let response
    var hash = bcryptjs.hashSync(req.body.password,8)
    req.body.password = hash
    response = await userController.userRecord(req,res)
    return response
}

const examDetail = (req,res)=>{
    const data=examController.examDetails(req,res)
    console.log(data)
    return data;
}

const viewExamDetail = (req,res)=>{
    examController.viewExamDetail(req,res)
}

const fetchExamDetail = (req,res)=>{
    examController.fetchExamDetail(req,res)
}
const removeExam = (req,res)=>{
    examController.removeExam(req,res)
}
const editExam = (req, res) => {
    examController.editExam(req, res)
}

const loggedInDetails = async(req, res) => {
    const det = await userController.loggedInDetails(req, res)
    return det
}
const adminLogin =async(req,res)=>{
   
    const result = await userController.adminLogin(req,res)
    //console.log(result);
    return result;
}
const userDetails = (req,res)=>{
    const data =userController.userDetails(req,res)
    return data;
}

const getQuestionDetail = (req, res) => {
    // console.log("hello1 ",req.params.id)
    questionDetail.getQuestionDetails(req, res)
}

const fetchQuestionById = (req, res) => {
    questionDetail.fetchQuestionById(req, res)
}

const editQuestion = (req, res) => {
    questionDetail.editQuestion(req, res)
}
const removeQuestion = (req, res) => {
    questionDetail.removeQuestion(req, res)
}
// const userDetails = (req, res) => {
//     // console.log('hello world')
//     const data = userController.userDetails(req, res)
//     return data;
// }

const testDetails = (req, res) => {
    const result = testInfo.testDetails(req, res)
    return result;
}

const examinerDel = (req, res) => {
    const result = testInfo.examinerDel(req, res)
    return result
}
const fetchData=(req,res)=>{
   const result=userController.fetchData(req,res)
   return result
}

const examinerUpd = (req, res) => {
    const result = userController.examinerUpd(req, res)
    return result
}
const updateUser=(req,res)=>{
    const data=userController.updateuser(req,res)
    return data;
}
const adminDetails=(req,res)=>{
    const data=userController.adminDetails(req,res)
    return data;
}

const question = (req,res)=>{
    questionDetail.questions(req,res)
}


module.exports = {
    adminDetails,
    updateUser,
    examinerUpd,
    examinerDel,
    fetchData,
    testDetails,
    viewExamDetail,
    fetchExamDetail,
    removeQuestion,
    fetchQuestionById,
    removeExam,
    getQuestionDetail,
    editExam,
    editQuestion,
    userDetails,
    adminLogin,
    loggedInDetails,
    userRecord,
    examDetail,
    question,
    // studentPerformance
}
