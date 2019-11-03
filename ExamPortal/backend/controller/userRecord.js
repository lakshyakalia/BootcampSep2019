const { user } = require('../Models/userRecord')
const { SECRET } = require('../config/config')
const jwt = require('jsonwebtoken');

function decodeToken(req) {
    const token = req.headers.token
    const decoded = req.jwt.verify()
}
const userRecord = async(req, res) => {
    try {
        let modelData = new user(req.body)
        await modelData.save()
        res.status(200).send({ msg: 'user information saved successful' })

    } catch (error) {
        return ({ error: error })
    }
}

function decodeToken(req) {
    const token = req.headers.token
    const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
    return decoded;
}
const loggedIn = async(req) => {
    const decoded = decodeToken(req);
    const det = await info.findOne({ "email": decoded.email });
    return det;
    // try {

    //     // let token = req.header.token
    //     const det = await user.findOne({ "_id": '5dbd6e6395554a2f8caa1af7' })
    //         // const det=await info.findOne({"email":decoded.email});
    //     const obj = new Object()
    //     obj.email = det.email
    //     obj.name = det.name
    //     obj.phoneNumber = det.phoneNumber
    //     obj.collegeName = det.collegeName
    //     console.log(obj)

    //     res.send(obj)

    // } catch (error) {
    //     return ({ error: error })
    // }
}
module.exports = {
    userRecord,
    loggedIn
}