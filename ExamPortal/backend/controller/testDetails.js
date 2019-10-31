const { user } = require('../models/userRecord')
const {examDetais} =require('../models/examDetail')
const testDetails= async(req,res)=>{
    try{
        debugger
        const query=await user.findOne({email:req.params.id})
        //console.log(query)
           return query;
        }
        catch(error)
        {
            return("No test")
        }
        
    }
const facultyDel= async(req,res)=>{
    try{
    const query=await user.deleteOne({email:req.params.id})
    
    return("User deleted")
    }
    catch(error)
    {
        return("not able to find ")
    }
}
    module.exports={
        testDetails,
        facultyDel,
    }