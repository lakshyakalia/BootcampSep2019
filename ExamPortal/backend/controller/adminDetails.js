const { user } = require('../models/userRecord')
const bcrypt = require('bcrypt');
// POST user
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
// GET all users
const fetchData = async (req,res)=>{
    const data = await user.find();
    res.send(data)
}

const fetchDatabyid = async (req,res)=>{
    const data = await user.findById(req.query.id);
    res.send(data)
}

// DELETE user by id
const deleteuser=async(req,res)=>{
    const id=req.body._id;
    await user.findByIdAndDelete(id);
    res.send({message:"user deleted"})
}
const updateuser=async(req,res)=>{
    const data= await user.findById(req.body.id);

    res.send({data: data});
}
module.exports = {
    adminDetails,
    fetchData,
    deleteuser,
    updateuser,
    fetchDatabyid
}
