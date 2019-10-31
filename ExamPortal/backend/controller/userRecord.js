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
    res.send({ error: error })
}
}
const userDetails=async(req,res)=>{

    const query=await user.find({email:req.body.email})
    //console.log(query)
       return query;
    
}
module.exports={
    userRecord,
    userDetails,
    decodeToken



}
