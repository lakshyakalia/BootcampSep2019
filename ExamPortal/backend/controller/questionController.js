const  questionDetail  = require('../models/question')
const {  test } = require('../models/candidateAnswer')
const { examDetail } = require('../models/examDetail')

const answerObject = (body,headers,weightage,status)=>{
    weightage = parseInt(weightage)
    let answerDetail = new test({
        candidateId: headers.id,
        totalScore:weightage,
        testCode: body.code,
        answers: [{
            answerSubmitted : body.checkedOption,
            questionId: body.qId,
            correctStatus: status
        }]
    })
    return answerDetail
}

const checkExistingOption = async (req,res,status,score)=>{
    const checkOption = await test.findOneAndUpdate(
        {answers:{$elemMatch:{questionId: req.body.qId}}},
        {$set:{"answers.$.answerSubmitted":req.body.checkedOption,"answers.$.correctStatus":status,"totalScore":score}}
    )
    if(checkOption == null) return false
    else return true
}

const testQuestions = async(req,res)=>{
    let lastQuestionStatus
    let pageNumber = parseInt(req.query.pageNumber)
    let ques = await questionDetail.find().skip(pageNumber*2).limit(2).select({"qText":1,"options":1,"examCode":1})
    let lastQuestion = await questionDetail.find().sort({$natural:-1}).limit(1).select({"qText":1})
    if(lastQuestion[0].qText === ques[ques.length-1].qText) lastQuestionStatus = true 
    else lastQuestionStatus = false
    const time = await examDetail.find({'examCode':req.headers.examcode}).select({examName:1,examStartTime:1,examDuration:1})
    
    res.status(200).send({
        "questions":ques,
        lastQuestionStatus: lastQuestionStatus,
        startTime:time[0].examStartTime,
        duration:time[0].examDuration,
        examName:time[0].examName
    })
}

const saveCandidateAnswers = async(req,res)=>{
    let checkAnswer = await questionDetail.findById(req.body.qId).select({"answer":1,"weightage":1})
    let existingAnswer = await test.findOne({ $and:[{candidateId:req.headers.id},{testCode:req.body.code}] })
    if(checkAnswer.answer === req.body.checkedOption){
        if(existingAnswer === null){
            let answerDetail = answerObject(req.body, req.headers, checkAnswer.weightage,true)
            await answerDetail.save()
        }
        else{
            let existingScore = await test.findOne({'testCode':req.body.code}).select({totalScore:1})
            let updatedScore = existingScore.totalScore+checkAnswer.weightage
            let status = checkExistingOption(req,res,true,updatedScore)
            if(!status){
                let updateScoreStatus = await test.findOneAndUpdate(
                    {$and:[{candidateId:req.headers.id},{testCode:req.body.code}]},
                    {   
                        $push: {answers:{answerSubmitted: req.body.checkedOption,questionId: req.body.qId, correctStatus: true}},
                        $set:{totalScore:updatedScore}
                    }
                )
            }
        }
    }
    else{
        if(req.body.checkedOption === undefined) req.body.checkedOption = null
        if(existingAnswer === null){
            let answerDetail = answerObject(req.body,req.headers,0,false)
            await answerDetail.save()
        }
        else{
            let existingScore = await test.findOne({'testCode':req.body.code}).select({totalScore:1})
            let updatedScore = existingScore.totalScore-checkAnswer.weightage
            let status = await checkExistingOption(req,res,false,updatedScore)
            if(!status){
                await test.findOneAndUpdate(
                    {$and:[{candidateId:req.headers.id},{testCode:req.body.code}]},
                    {
                        $push: {answers:{answerSubmitted: req.body.checkedOption, questionId: req.body.qId, correctStatus: false}}
                    }
                )
            }
        }
    }
    return res.status(200).send({"msg":"Answer saved Succesfully"})
}

const checkAccessKey = async(req,res)=>{
    const status = await examDetail.find({examCode: req.body.examCode})
    if(status.length != 0){
        return res.status(200).send(status)
    }
    else return res.status(400).send(status)
}
const questions = async (req, res) => {
    try {
        let questionInformation = new questionDetail(req.body)
        await questionInformation.save()
        res.status(200).send({ msg: 'question saved successful' })
    }
    catch (error) {
        res.send({ error })
    }
}

const getQuestionDetails = async (req,res) =>{
    try{
     let values= await questionDetail.find({examCode:decodeURIComponent(req.params.id)});
     res.status(200).send( values)
    }
    catch(error){
     console.log(error)
    }
}

const removeByExamCode = async(code)=>{
    try{
        await questionDetail.remove({examCode:code})
        return
    }catch(error){
        console.log(error)
        return
    }
}
module.exports = {
    testQuestions,
    saveCandidateAnswers,
    checkAccessKey,
    questions,
    getQuestionDetails,
    removeByExamCode
}
