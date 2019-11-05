const { user } = require('../models/userRecord')
const {admin}=require('../models/adminLogin')
const { SECRET } = require("../config/config")
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs')

function decodeToken(req) {
    const token = req.headers.token
    const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
    return decoded;
  }

const adminDetails = async(req, res) => {
    try {
        const existUser = await user.findOne({ email: req.body.email });
        if (existUser) {
            return ({"message": "user already exist"})
        } else {
            const userInfo = req.body;
            var myPlaintesxtPassword = userInfo.password;
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(myPlaintesxtPassword, salt)
            userInfo.password = hash; {
                user.create(userInfo)
                return ({ "status": "200", "message": "user registered" })

            }
        }
    } catch (error) {
        console.log(error)
        return ({ error: error })
    }
}

const loggedInDetails = async(req, res) => {
    const decoded = decodeToken(req);
    const det = await user.findOne({ "email": decoded.email });
    console.log(det)
    return det;
}

const userDetails = async(req, res) => {
    try {
        const query = await user.findOne({ email: req.body.email })
        return query
    } catch (error) {
        return ("User not found")
    }
}


const examinerUpd = async(req, res) => {
    try {
        // console.log(req.body)
        const body = req.body
        const myPlaintextPassword = body.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(myPlaintextPassword, salt)
        body.password = hash;
        const query = await user.findOneAndUpdate({ email: req.body.email }, body)
        return ({ "status": "200", "message": "user updated" });
    } catch (error) {
        return ("User details not valid")
    }

}

const fetchData = async(req, res) => {
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
           console.log("inside");
           console.log(req.body.password);
          //res.send({"message":"Admin exist"})
         const pass=await bcrypt.compare(req.body.password,existUser.password);
         console.log(pass);
         if(pass)
         {
            res.send({"message":"Admin valid"});
         }
         else{
            res.send({"message":"Email or password is not valid"}); 
         }
        }
        else
        {
            res.send({"message":"Email or password is not valid"}); 
        }
        
} 
module.exports={
   // userRecord,
    userDetails,
    decodeToken,
    fetchData,
    updateuser,
    adminLogin,
    adminDetails
}
