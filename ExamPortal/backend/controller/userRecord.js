const user = require ('../models/userRecord')
const {SECRET} = require('../config/config')
const jwt = require('jsonwebtoken');

function decodeToken(req){
    const token = req.headers.token
    const decoded =req.jwt.verify()
}
const userRecord = async(req,res)=>{
    try{
        let modelData  =new user(req.body)
        await modelData.save()
        res.status(200).send({msg: 'user information saved successful'})

    }
    catch(error){
        return({error:error})
    }
}
module.exports = {
    userRecord
}