const examController = require('./examDetailController')
const userController =require('./userRecord')
const testInfo = require('./testDetails')
const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}
const userRecord =(req,res)=>{
    const result =userController.userRecord(req,res)
    return result;
}

const userDetails = (req,res)=>{
    debugger
    const data =userController.userDetails(req,res)
    return data;

}
const testDetails = (req,res)=>{
    const result = testInfo.testDetails(req,res)
    return result;
}
const facultyDel= (req,res)=>{
     const result=testInfo.facultyDel(req,res)
    return result
}
const facultyUpd= (req,res)=>{
    debugger
    const result = userController.facultyUpd(req,res)
    return result

}
module.exports={
    userRecord,
    examDetails,
    userDetails,
    testDetails,
    facultyDel,
    facultyUpd
}