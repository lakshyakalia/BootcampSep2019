const { user } = require('../Models/userRecord')
const examDetail = require('../Models/examDetail')

const viewPerformance = async(req, res) => {
    try {

        let values = await examDetail.find()
        let values2 = await user.find()
        var obj = {
                objUser: values2,
                objExam: values

            }
            // console.log(values.examCode)
            //     //  var string = JSON.stringify(values);
            // for (var myKey in values) {
            //     obj.examCode = values[myKey].examCode
            //         //  console.log("key:" + myKey + ", value:" + values[myKey].examCode);

        // }
        // console.log(obj)

        res.send(obj)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    viewPerformance
}