const examDetailController = require('./examDetailController')
const questionDetail = require('./questionDetail')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const bcryptjs = require('bcryptjs')

const userRecord = async(req, res) => {
    let body, response
    var hash = bcryptjs.hashSync(req.body.password, 8)
    console.log(hash)
    req.body.password = hash
    response = await userController.userRecord(req, res)
    return response
}
const loggedInDetails = (req, res) => {
    const det = userController.loggedIn(req, res)
    return det
}

const question = (req, res) => {

    questionDetail.questions(req, res)
}

const examDetail = (req, res) => {

    examDetailController.examDetails(req, res)
}

const studentPerformance = (req, res) => {
    studentPerformanceController.viewPerformance(req, res)
}

const getexamDetail = (req, res) => {
    //console.log("hello1")
    examDetailController.getexamDetails(req, res)
}

const getQuestionDetail = (req, res) => {
    //console.log("hello1")
    questionDetail.getQuestionDetails(req, res)
}


module.exports = {
    examDetail,
    question,
    getexamDetail,
    getQuestionDetail,
    studentPerformance,
    userRecord,
    loggedInDetails
}