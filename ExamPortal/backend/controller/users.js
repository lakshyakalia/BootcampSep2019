const examController = require('./examDetailController')
const userController =require('./userRecord')
const testInfo = require('./testDetails')

const examDetails = (req,res)=>{
    examController.examDetails(req,res)
}
const userRecord =(req,res)=>{
    debugger
    const result =userController.userRecord(req,res)
    return result;
}
///////////////////////
const adminLogin =async(req,res)=>{
   
    const result = await userController.adminLogin(req,res)
    //console.log(result);
    return result;
}
const userDetails = (req,res)=>{
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
const fetchData=(req,res)=>{
   const result=userController.fetchData(req,res)
   return result
}
const facultyUpd= (req,res)=>{
    
    const result = userController.facultyUpd(req,res)
    return result

}
const updateUser=(req,res)=>{
    const data=userController.updateuser(req,res)
    return data;
}

module.exports={
    userRecord,
    examDetails,
    userDetails,
    testDetails,
    facultyDel,
   fetchData,
    facultyUpd,
    updateUser,
    adminLogin
}