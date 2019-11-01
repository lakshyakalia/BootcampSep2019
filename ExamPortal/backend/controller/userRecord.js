const { user } = require('../models/userRecord')
const { SECRET } = require("../config/config")
const jwt = require('jsonwebtoken');

function decodeToken(req){
    const token =req.headers.token 
    const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
    return decoded;
  }
const userRecord = async(req,res)=>{
    try{
        let userrecord = new user(req.body)
    
    console.log(userrecord)
    await userrecord.save()
    res.status(200).send({ msg: 'user information saved successful' })
} catch (error) {
    console.log(error)
   return({ error: error })
}
}
const userDetails=async(req,res)=>{
    try{
    const query=await user.find({email:req.body.email})
    //console.log(query)
       return query;
    }
    catch(error)
    {
        return("User not found")
    }
    
}
const fetchData = async (req,res)=>{
    const data = await user.find();
    res.send(data)
}
module.exports={
    userRecord,
    userDetails,
    decodeToken,
    fetchData
}
