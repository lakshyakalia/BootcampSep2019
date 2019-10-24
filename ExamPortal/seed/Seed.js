const { examDetail } = require('./Models/examDetail')
const { test } = require('./Models/candidateAnswer')
const { questionDetail } = require('./Models/question')
const { user } = require('./Models/userRecord')
const db = require("./connection").db;
const users = [
    {
        email: "charlie@gmail.com",
        name: "Charlie Pin",
        password: "charlie",
        accType: "student",
        collegeId: "12345",
        collegeName: "ABC College",
        phoneNumber: "1234567890",
        modifiedBy:"birendra",
        permissionLevel: 0
    },
    {
        email: "sophiemoore@gmail.com",
        name: "Sophie Moore",
        password: "sophie",
        accType: "student",
        collegeId: "34524",
        collegeName: "DEF College",
        phoneNumber: "9876543210",
        modifiedBy:"birendra",
        permissionLevel: 0
    },
    {
        email: "frannymason@gmail.com",
        name: "Franny Mason",
        password: "franny",
        accType: "faculty",
        collegeId: "12834",
        collegeName: "ABC College",
        phoneNumber: "1234567890",
        modifiedBy:"birendra",
        permissionLevel: 1
    },
    {
        email: "david@gmail.com",
        name: "David Moore",
        password: "david",
        accType: "faculty",
        collegeId: "45432",
        collegeName: "qwe College",
        phoneNumber: "1266465390",
        modifiedBy:"birendra",
        permissionLevel: 1
    }
]

const answerDetails = [
    {
        candidateId: 12345,
        totalScore: 7,
        answers: [
            {
                answerSubmitted : 2,
                questionId: 124
            },
            {
                answerSubmitted : 3,
                questionId: 343
            },
            {
                answerSubmitted : 1,
                questionId: 678
            }
        ]
    },
    {
        candidateId: 14509,
        totalScore: 3,
        answers: [
            {
                answerSubmitted : 4,
                questionId: 764
            },
            {
                answerSubmitted : 3,
                questionId: 998
            },
            {
                answerSubmitted : 2,
                questionId: 675
            }
        ]
    }
]

const questionDetails = [
    {
        qHeading: "MCQ",
        qText: "What is",
        qNo: 1,
        ans: 1,
        options:{
            op1: "abc",
            op2: "cde",
            op3: "fgh",
            op4: "ijk"
        },
        weightage: 1,
        createdBy:'himan',
        modifiedBy:"biren",
        examCode: 1199
        
    },
    {
        qHeading: "MCQ",
        qText: "What is",
        qNo: 2,
        ans: 3,
        options:{
            op1: "abc",
            op2: "cde",
            op3: "fgh",
            op4: "ijk"
        },
        weightage: 1,
        createdBy:'himan',
        modifiedBy:"biren",
        examCode: 1199
    },
    {
        qHeading: "MCQ",
        qText: "What is",
        qNo: 3,
        ans: 4,
        options:{
            op1: "abc",
            op2: "cde",
            op3: "fgh",
            op4: "ijk"
        },
        weightage: 1,
        createdBy:'himan',
        modifiedBy:"biren",
        examCode: 1199
    }
]

const examDetails = [
    {
        examName: "CSE",
        examCode: 1199,
        examinerId: 1638,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min",
        testStartTime: "10:15pm"
    },
    {
        examName: "ME",
        examCode: 2234,
        examinerId: 67983,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min",
        testStartTime: "10:15pm"
    },
    {
        examName: "ECE",
        examCode: 3456,
        examinerId: 7695,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min",
        testStartTime: "10:15pm"
    }
]


for(let i=0;i<users.length;i++){
    let data = new user(users[i])
    data.save()
}

for(let i=0;i<answerDetails.length;i++){
    let data = new test(answerDetails[i])
    data.save()
}

for(let i=0;i<questionDetails.length;i++){
    let data = new questionDetail(questionDetails[i])
    data.save()
}

for(let i=0;i<examDetails.length;i++){
    let data = new examDetail(examDetails[i])
    data.save()
}