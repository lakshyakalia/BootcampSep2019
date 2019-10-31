const examController = require('./examDetailController')

const studentPerformanceController = require('./studentPerformance')

const examDetails = (req, res) => {
    examController.examDetails(req, res)
}

const studentPerformance = (req, res) => {
    console.log("yes yes")
    studentPerformanceController.viewPerformance(req, res)
}
module.exports = {
    examDetails,
    studentPerformance
}