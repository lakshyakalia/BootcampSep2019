const { examDetail } = require('../backend/Models/examDetail')
const { test } = require('../backend/Models/candidateAnswer')
const { questionDetail } = require('../backend/Models/question')
const { user } = require('../backend/Models/userRecord')
const db = require("../backend/db").connection;
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
        questionText: "The physical devices of a computer ",
        answer: "option1 option2 option3",
        option1: "Software",
        option2: "Package",
        option3: "Hardware",
        option4: "System Software",
        weightage: 1,
        createdBy:'himan',
        examCode: 1199,
        answerType:'multipleOption'       
    },
    {
        questionText: "Which of the following is designed to control the operations of a computer?",
        answer: "option1 option2",
        option1: "Application Software",
        option2: "System Software",
        option3: "Utility Software",
        option4: "User",
        weightage: 1,
        createdBy:'himan',
        examCode: 1199,
        answerType:'multipleOption'
    },
    {
        questionText: "Which of the following is not an example of system software?",
        answer: "option1 option3",
        option1: "Language Translator",
        option2: "Utility Software",
        option3: "Communication Software",
        option4: "Word Processors",
        weightage: 1,
        createdBy:'himan',
        examCode: 1199,
        answerType:'multipleOption'
    },
    {
        questionText: "What is the full form of RMI?",
        answer: "option3 option4",
        option1: "Remote Memory Installation",
        option2: "Remote Memory Invocation",
        option3: "Remote Method Installation",
        option4: "Remote Method Invocation",
        weightage: 2,
        createdBy:'himan',
        examCode: 1199,
        answerType:'multipleOption'
    },
    {
        qText: "What is Scheduling?",
        answer: "option2 option4",
        option1: "allowing a job to use the processor",
        option2: "making proper use of processor",
        option3: "all of the mentioned",
        option4: "none of the mentioned",
        weightage: 3,
        createdBy:'himan',
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
        testStartTime: "27-10-2019 09:51:00"
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


// for(let i=0;i<users.length;i++){
//     let data = new user(users[i])
//     data.save()
// }

// for(let i=0;i<answerDetails.length;i++){
//     let data = new test(answerDetails[i])
//     data.save()
// }

for(let i=0;i<questionDetails.length;i++){
    let data = new questionDetail(questionDetails[i])
    data.save()
}

// for(let i=0;i<examDetails.length;i++){
//     let data = new examDetail(examDetails[i])
//     data.save()
// }