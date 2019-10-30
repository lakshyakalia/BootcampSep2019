const examController = require('./examDetailController')

const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}
module.exports={
    examDetails
}