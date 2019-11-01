const jwt = require("jsonwebtoken");
const {SECRET} = require('../config/config')
const {Users} = require("../controller");
const bcrypt = require('bcrypt')

async function checkAuth (req) {
  
 const data =await matchCredentials(req);

 if(data=="matched"){
  const valuePass = await comparePassword(req.body.password,req)
  if(valuePass=="1"){
    const token =await generateToken(req);
    return ({
      "message": "password matched",
      "token" : token,
    })
  }else if(valuePass=="0") {
    return ({
      "message": "password not matched",
      "token"  : "null",
    })
  }
 }else {
   return ({
     "message": "user not exists please sign up",
     "token" : "null ",
    })   
 }
  
}

async function generateToken(req) {
  let email = req.body.email;
  const user = await Users.userDetails(req);
  const id = user[0]._id;
  const claim =user[0].accountType
  var token = jwt.sign( {email, expiresIn: '24h',id,claim},new Buffer(SECRET ,'base64'));
  return token;
}

async function comparePassword(myPlaintextPassword,req){
  const user = await Users.userDetails(req);
  const hash = user[0].password;
  if(bcrypt.compareSync(myPlaintextPassword, hash)) {
    // Passwords match
   return "1";
   } else {
    // Passwords don't match
    return "0"
   }
}

async function matchCredentials (req,res){
  const user = await Users.userDetails(req,res)
  //console.log(user[0].email)
  //console.log(req.body.email)
   console.log("user : "+req.body.email);
  if(user.length==0) {return "Do sign up"}
  else if(user[0].email == req.body.email){
    console.log("------matchcredentials")
    return "matched";  
  }
  else {
    console.log("create user");
    return "Do sign up"
  }
}

module.exports = {
  checkAuth
}


function hello(){
  const saltRounds = 10;
  const myPlaintextPassword = "c1234"
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log('hash : '+hash)
    });
});
}

hello()