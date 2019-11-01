const { user } = require('../models/userRecord')
const { SECRET } = require("../config/config")
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt')

function decodeToken(req){  
    const token =req.headers.token 
    const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
    return decoded;
  }
const userRecord = async(req,res)=>{
    try{
        const userInfo =req.body;
        var myPlaintesxtPassword= userInfo.password;    
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(myPlaintesxtPassword,salt)
        userInfo.password=hash;
        const userExit =await userDetails(req);
        if(userExit.length==0)
        {
            user.create(userInfo)
            return ({"status":"200","message":"user registered"})
        }
        else{
            return("user already exsit")
        }
    
} catch (error) {
    console.log(error)
   return({ error: error })
}
}
const userDetails=async(req,res)=>{
    try{
        debugger
    const query=await user.findOne({email:req.headers.email})
    //console.log(query)
       return query;
    }
    catch(error)
    {
        return("User not found")
    }
}
const facultyUpd=async(req,res)=>{
try{
   const body=req.body
   debugger
    const query =await user.findOneAndUpdate({email:req.body.email},body)
    return ("user updated");
}

catch(error)
{
    return("User details not valid")
}
    
}
module.exports={
    userRecord,
    userDetails,
    decodeToken,
    facultyUpd
}
