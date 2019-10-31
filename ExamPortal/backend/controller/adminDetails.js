const { user } = require('../models/userRecord')
const bcrypt = require('bcrypt');
const adminDetails = async (req, res) => {
    const existuser = await user.findOne({ email: req.body.email });
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    if (existuser) {
        console.log("Email Id already Exist");
    }
    else {
        let adminInformation = new user({
            email: req.body.email,
            name: req.body.name,
            password: hashedpassword,
            accountType: req.body.accountType,
            collegeName: req.body.collegeName,
            phoneNumber: req.body.phoneNumber
        })
        await adminInformation.save()
        res.status(200).send({ msg: 'Admin information saved successful' })
    }
}

const fetchData = async (req,res)=>{
    const data = await user.find();
    res.send(data)
}

module.exports = {
    adminDetails,
    fetchData
}
