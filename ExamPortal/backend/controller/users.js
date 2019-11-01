const examController = require('./examDetailController')
const questionDetail = require('./questionDetail')
const studentPerformanceController = require('./studentPerformance')
const userController = require('./userRecord')
const testInfo = require('./testDetails')

const question = (req, res) => {
    questionDetail.questions(req, res)
}

const examDetail = (req, res) => {
    examDetailController.examDetails(req, res)
}

const examDetails = (req, res) => {
    examController.examDetails(req, res)
}

const studentPerformance = (req, res) => {
    studentPerformanceController.viewPerformance(req, res)
}
const viewExam = (req, res) => {
    examDetailController.viewExam(req, res)
}

const userRecord = (req, res) => {
    const result = userController.userRecord(req, res)
    return result;
}

const userDetails = (req, res) => {
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
    userRecord,
    examDetails,
    userDetails,
    testDetails,
    facultyDel,
    fetchData,
    facultyUpd,
    examDetail,
    studentPerformance,
    question,
    viewExam
}
