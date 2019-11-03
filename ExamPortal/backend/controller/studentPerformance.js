const examDetail = require('../Models/examDetail')

const viewPerformance = (req, res) => {

    try {
        // const obj = new Object()
        //     // let arr = []
        //     // arr.push(obj)
        // obj.id = '1'
        // obj.name = 'Birendra'
        // obj.testId = '1011'
        // obj.attempted = '10'
        // obj.correct = '5'
        // obj.unattempted = '0'
        // obj.totalScore = '5'
        // obj.percentage = '50%'
        // let values = examDetail.find()
        // let values2 = user.find()
        // var obj = {
        //     objUser: values2,
        //     objExam: values

        // }

        res.send('obj')
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    viewPerformance
}