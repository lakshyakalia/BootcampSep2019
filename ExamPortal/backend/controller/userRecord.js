const { user } = require('../models/userRecord')
const {admin}=require('../models/adminLogin')
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
        const existUser =await user.findOne({email:req.body.email});
        debugger
        if(existUser)
        {
            return("user Exist")
        }
        else{

        
        const userInfo =req.body;
        var myPlaintesxtPassword= userInfo.password;    
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(myPlaintesxtPassword,salt)
        userInfo.password=hash;
        {
            user.create(userInfo)
            return ({"status":"200","message":"user registered"})
      
        }
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
const fetchData = async (req,res)=>{
    const data = await user.find();
    return data
}
const updateuser=async(req,res)=>
{
    const id = req.body.id;
    const data=await user.findByIdAndUpdate(id,req.body);
    return data;
}
///////////////////////////////

const adminLogin = async(req,res)=>{
        const existUser =await admin.findOne({email:req.body.email});
       // console.log(existUser);
        if(existUser)
        {
           //console.log("inside");
          // console.log(req.body.password);
          //res.send({"message":"Admin exist"})
        // const pass=await bcrypt.compare(req.body.password,admin.password);
         //console.log(pass);
        // if(pass)
         {
            res.send({"message":"Admin valid"});
         }
        }
        else
        {
            res.send({"message":"Email or password is not valid"}); 
        }
        
} 
module.exports={
    userRecord,
    userDetails,
    decodeToken,
    fetchData,
    facultyUpd,
    updateuser,
    adminLogin
}
