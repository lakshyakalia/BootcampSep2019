const { questionDetail } = require('../Models/question')
const {  test } = require('../Models/candidateAnswers')
const { examDetail } = require('../Models/examDetail')

const answerObject = (body,headers,weightage,status)=>{
    weightage = parseInt(weightage)
    let answerDetail = new test({
        candidateId: headers.studentid,
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
    let ques = await questionDetail.find().skip(pageNumber*2).limit(2).select({"qText":1,"options":1,"examCode":1})
    let lastQuestion = await questionDetail.find().sort({$natural:-1}).limit(1)
    if(lastQuestion[0].qText === ques[ques.length-1].qText) lastQuestionStatus = true
    else lastQuestionStatus = false
    const time = await examDetail.find({'examCode':req.headers.code}).select({examStartTime:1,examDuration:1})
    res.status(200).send({
        "questions":ques,
        lastQuestionStatus: lastQuestionStatus,
        startTime:time[0].testStartTime,
        duration:time[0].examDuration
    })
}

const saveCandidateAnswers = async(req,res)=>{
    let checkAnswer = await questionDetail.findById(req.body.qId).select({"ans":1,"weightage":1})
    let existingAnswer = await test.findOne({ $and:[{candidateId:req.headers.id},{testCode:req.body.code}] })
    if(checkAnswer.ans === req.body.checkedOption){
        if(existingAnswer === null){
            let answerDetail = answerObject(req.body, req.headers, checkAnswer.weightage,true)
            await answerDetail.save()
        }
        else{
            let existingScore = await test.findOne({'testCode':req.body.code}).select({totalScore:1})
            let updatedScore = existingScore.totalScore+checkAnswer.weightage
            let updateScoreStatus = await test.findOneAndUpdate(
                {$and:[{candidateId:req.headers.studentid},{testCode:req.body.code}]},
                {   
                    $push: {answers:{answerSubmitted: req.body.checkedOption,questionId: req.body.qId, correctStatus: true}},
                    $set:{totalScore:updatedScore}
                }
            )
        }
    }
    else{
        if(req.body.checkedOption === undefined) req.body.checkedOption = null
        if(existingAnswer === null){
            let answerDetail = answerObject(req.body,req.headers,0,false)
            await answerDetail.save()
        }
        else{
            await test.findOneAndUpdate(
                {$and:[{candidateId:req.headers.studentid},{testCode:req.body.code}]},
                {
                    $push: {answers:{answerSubmitted: req.body.checkedOption, questionId: req.body.qId, correctStatus: false}}
                }
            )
        }
    }
    return res.status(200).send({"msg":"Answer saved Succesfully"})
}

module.exports = {
    testQuestions,
    saveCandidateAnswers
}