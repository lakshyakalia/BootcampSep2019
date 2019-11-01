const examDetail = require('../Models/examDetail')
// const  exam  = require('../models/examDetail')

const examDetails = async(req, res) => {
    try {
        // console.log()
        let examInformation = new examDetail(req.body)
        await examInformation.save()
        res.status(200).send({ msg: 'exam information saved successful' })
    } catch (error) {
        console.log(error)
        res.send({ error })
    }
}

const getexamDetails = async (req,res) =>{
    try{
    let values= await examDetail.find()
     res.status(200).send( values)
    }
    catch(error){
     console.log(error)
    }
}  

module.exports = {
    examDetails,
    getexamDetails
}