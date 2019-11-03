const examController = require('./examDetailController')
const questionDetail = require('./questionController')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const bcryptjs = require('bcryptjs')

const userRecord = async(req, res) => {
    let response
    var hash = bcryptjs.hashSync(req.body.password, 8)
    console.log(hash)
    req.body.password = hash
    response = await userController.userRecord(req, res)
    return response
}
const testInfo = require('./testDetails')

const loggedInDetails = async(req, res) => {
    const det = await userController.loggedInDetails(req, res)
    return det
}

const question = (req, res) => {
    questionDetail.questions(req, res)
}

const examDetail = (req, res) => {
    examController.examDetails(req, res)
}

const studentPerformance = (req, res) => {
    studentPerformanceController.viewPerformance(req, res)
}

const viewExamDetail = (req, res) => {
    //console.log("hello1")
    examController.viewExamDetail(req, res)
}
const fetchExamDetail = (req,res)=>{
    examController.fetchExamDetail(req,res)
}
const removeExam = (req,res)=>{
    examController.removeExam(req,res)
}
const editExam = (req,res)=>{
    examController.editExam(req,res)
}
const getQuestionDetail = (req,res)=>{
    // console.log("hello1 ",req.params.id)
    questionDetail.getQuestionDetails(req,res)
}

const userDetails = (req, res) => {
    // console.log('hello world')
    const data = userController.userDetails(req, res)
    return data;
}

const testDetails = (req, res) => {
    const result = testInfo.testDetails(req, res)
    return result;
}

const facultyDel = (req, res) => {
    const result = testInfo.facultyDel(req, res)
    return result
}

const fetchData = (req, res) => {
    const result = userController.fetchData(req, res)
    return result
}

const facultyUpd = (req, res) => {
    const result = userController.facultyUpd(req, res)
    return result
}

module.exports = {
    userDetails,
    testDetails,
    facultyDel,
    fetchData,
    facultyUpd,
    examDetail,
    question,
    viewExamDetail,
    getQuestionDetail,
    userRecord,
    loggedInDetails,
    removeExam,
    fetchExamDetail,
    editExam
}
