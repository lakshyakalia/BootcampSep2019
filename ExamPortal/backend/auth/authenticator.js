const jwt = require("jsonwebtoken");
const { SECRET } = require('../config/config')
const { Users } = require("../controller");
const bcrypt = require('bcrypt')

// async function matchCredentials(req, res) {
// 	const user = await Users.userDetails(req, res)

// 	// if (user.length == 0) { return "Do sign up" }
// 	if(user == null) { return "Do sign up"}
// 	else if (user[0].email == req.body.email) {
// 		console.log("------matchcredentials")
// 		return "matched";
// 	}
// 	else {
// 		console.log("create user");
// 		return "Do sign up"
// 	}
// }

async function matchCredentials(req,res){
	const user = await Users.userDetails(req,res)

	if(user == null) { return "Do sign up"}
	else if(user.email == req.body.email){
		return "matched"
	}
}

// async function comparePassword(myPlaintextPassword, req) {
// 	const user = await Users.userDetails(req);
// 	const hash = user[0].password;
// 	if (bcrypt.compareSync(myPlaintextPassword, hash)) {
// 		// Passwords match
// 		return "1";
// 	} else {
// 		// Passwords don't match
// 		return "0"
// 	}
// }

async function comparePassword(myPlaintextPassword,req){
	const user = await Users.userDetails(req)
	const hash = user.password
	if(bcrypt.compareSync(myPlaintextPassword,hash)){
		return "1"
	}
	else{
		return "0"
	}
}

async function generateToken(req) {
	let email = req.body.email;
	const user = await Users.userDetails(req);
	const id = user._id;
	const claim = user.accountType
	var token = jwt.sign({ email, expiresIn: '24h', id, claim }, new Buffer(SECRET, 'base64'));
	return token;
}

async function checkAuth(req) {
	const data = await matchCredentials(req);
	if (data == "matched") {
		const valuePass = await comparePassword(req.body.password, req)
		if (valuePass == "1") {
			const token = await generateToken(req);
			return ({
				"message": "password matched",
				"token": token,
			})
		} else if (valuePass == "0"){
			return ({
				"message": "password not matched",
				"token": "null",
			})
		}
	} else {
		return ({
			"message": "user not exists please sign up",
			"token": "null",
		})
	}
}

module.exports = {
	checkAuth
}
