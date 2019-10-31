const examController = require('./examDetailController')
const userController =require('./userRecord')
const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}
const userRecord =(req,res)=>{
    userController.userRecord(req,res)
}

const userDetails = (req,res)=>{
    const data =userController.userDetails(req,res)
    return data;

}
module.exports={
    userRecord,
    examDetails,
    userDetails
}