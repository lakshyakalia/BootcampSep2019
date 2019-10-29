const { exam } = require('./Models/examDetail')
const { test } = require('./Models/testRecord')
const { question } = require('./Models/question')
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
        permissionLevel: 1
    }
]

const testRecord = [
    {
        stdId: 12345,
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
        stdId: 14509,
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
        examCode: 1199
    }
]

const examDetails = [
    {
        examName: "CSE",
        examCode: 1199,
        facultyId: 1638,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min"
    },
    {
        examName: "ME",
        examCode: 2234,
        facultyId: 67983,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min"
    },
    {
        examName: "ECE",
        examCode: 3456,
        facultyId: 7695,
        instructions: "All questions are neccessary to attempt",
        examDuration: "90min"
    }
]


for(let i=0;i<users.length;i++){
    let data = new user(users[i])
    data.save()
}

for(let i=0;i<testRecord.length;i++){
    let data = new test(testRecord[i])
    data.save()
}

for(let i=0;i<questionDetails.length;i++){
    let data = new question(questionDetails[i])
    data.save()
}

for(let i=0;i<examDetails.length;i++){
    let data = new exam(examDetails[i])
    data.save()
}