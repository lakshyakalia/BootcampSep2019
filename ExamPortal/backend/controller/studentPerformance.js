const examDetail = require('../Models/examDetail')

const viewPerformance = (req, res) => {

    try {
        const obj1 = new Object()
            //     // let arr = []
            //     // arr.push(obj)
        obj1.id = '1'
        obj1.name = 'Birendra'
        obj1.testId = '1011'
        obj1.attempted = '10'
        obj1.correct = '5'
        obj1.unattempted = '0'
        obj1.totalScore = '5'
        obj1.percentage = '50%'
            // let values = examDetail.find()
            // let values2 = user.find()
            // var obj = {
            //     objUser: values2,
            //     objExam: values

        // }

        res.send(obj1)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    viewPerformance
}