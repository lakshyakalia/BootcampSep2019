const { questionDetail } = require('../Models/question')
const {  test } = require('../Models/candidateAnswer')
const { examDetail } = require('../Models/examDetail')

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

const testQuestions = async(req,res)=>{
    let lastQuestionStatus
    let pageNumber = parseInt(req.query.pageNumber)
    let ques = await questionDetail.find({'examCode':req.headers.examcode}).skip(pageNumber*2).limit(2).select({"questionText":1,"options":1,"examCode":1})
    let lastQuestion = await questionDetail.find({'examCode':req.headers.examcode}).sort({$natural:-1}).limit(1).select({"questionText":1})
    if(lastQuestion[0].questionText === ques[ques.length-1].questionText) lastQuestionStatus = true 
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

const checkExistingRightOption = async (option,qId,studentId,updatedScore)=>{
    let status = await test.findOne({candidateId:studentId},{answers:{$elemMatch:{questionId:qId}}})
    if(status !== null){
        if(status.answers[0].correctStatus){
            await test.update({$and:[
                {answers:{ $elemMatch:{questionId:qId} }},
                {candidateId:studentId}
                ]},{$set:{
                    "answers.$.answerSubmitted":option,
                }})
        }
        else{
            await test.update({$and:[
                {answers:{ $elemMatch:{questionId:qId} }},
                {candidateId:studentId}
                ]},{$set:{
                    "answers.$.answerSubmitted":option,
                    "answers.$.correctStatus":true,
                    "totalScore":updatedScore
                }})
        }
        return true
    }
    return false

}

const saveCorrectOption = async(req,checkAnswer,existingAnswer)=>{
    if(existingAnswer === null){
        let answerDetail = answerObject(req.body, req.headers, checkAnswer.weightage,true)
        let status = await answerDetail.save()
    }
    else{
        let existingScore = await test.findOne({'testCode':req.body.code}).select({totalScore:1})
        let updatedScore = existingScore.totalScore+checkAnswer.weightage
        let existingAnswerStatus = await checkExistingRightOption(req.body.checkedOption,req.body.qId,req.headers.id,updatedScore)
        if(!existingAnswerStatus){
            await test.findOneAndUpdate(
                {$and:[{candidateId:req.headers.id},{testCode:req.body.code}]},
                {   
                    $push: {answers:{answerSubmitted: req.body.checkedOption,questionId: req.body.qId, correctStatus: true}},
                    $set:{totalScore:updatedScore}
                },
                {new: true}
            )
        }
    }
}

const checkExistingWrongOption = async(option,qId,studentId,updatedScore)=>{
    let status = await test.findOne({candidateId:studentId},{answers:{$elemMatch:{questionId:qId}}})
    if(status !== null){
        if(status.answers[0].correctStatus){
            await test.update({$and:[
                {answers:{ $elemMatch:{questionId:qId} }},
                {candidateId:studentId}
                ]},{$set:{
                    "answers.$.answerSubmitted":option,
                    "answers.$.correctStatus":false,
                    "totalScore":updatedScore
                }})
        }
        else{
            await test.update({$and:[
                {answers:{ $elemMatch:{questionId:qId} }},
                {candidateId:studentId}
                ]},{$set:{
                    "answers.$.answerSubmitted":option,
                }})
        }
        return true
    }
    return false
}

const saveIncorrectOption = async(req,checkAnswer,existingAnswer)=>{
    if(req.body.checkedOption  === undefined) req.body.checkedOption = null
    if(existingAnswer === null){
        let answerDetail = answerObject(req.body,req.headers,0,false)
        await answerDetail.save()
    }
    else{
        let existingScore = await test.findOne({'testCode':req.body.code}).select({totalScore:1})
        let updatedScore = existingScore.totalScore-checkAnswer.weightage
        let existingAnswerStatus = await checkExistingWrongOption(req.body.checkedOption,req.body.qId,req.headers.id,updatedScore)
        if(!existingAnswerStatus){
            await test.findOneAndUpdate(
                {$and:[{candidateId:req.headers.id},{testCode:req.body.code}]},
                {
                    $push: {answers:{answerSubmitted: req.body.checkedOption, questionId: req.body.qId, correctStatus: false}}
                }
            )
        }
    }
}

const saveCandidateAnswers = async(req,res)=>{
    let checkAnswer = await questionDetail.findById(req.body.qId).select({"answer":1,"weightage":1})
    let existingAnswer = await test.findOne({ $and:[{candidateId:req.headers.id},{testCode:req.body.code}] })
    if(checkAnswer.answer === req.body.checkedOption){
        await saveCorrectOption(req,checkAnswer,existingAnswer)
        res.status(200).send({"msg":"Saved Successfully"})
    }
    else{
        await saveIncorrectOption(req,checkAnswer,existingAnswer)
        res.status(200).send({"msg":"Saved Successfully"})
    } 
}


const checkAccessKey = async(req,res)=>{
    const status = await examDetail.find({examCode: req.body.examCode})
    if(status.length != 0){
        return res.status(200).send(status)
    }
    else return res.status(400).send(status)
}

module.exports = {
    testQuestions,
    saveCandidateAnswers,
    checkAccessKey
}