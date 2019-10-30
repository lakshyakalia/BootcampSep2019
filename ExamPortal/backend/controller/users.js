const {examDetails} = require('./examDetailController')

const examDetail = (res,req)=>{
    
    examDetails.examDetail(req,res)
}
module.exports={
    examDetail
}