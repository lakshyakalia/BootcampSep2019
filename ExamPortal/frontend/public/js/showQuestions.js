// this page will create dom to display questions
// this page will create dom to display questions
var questions = [{
        question: 'Question-',
        questionText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
        options: {
            option1: "option1",
            option2: 'option2',
            option3: 'option3',
            option4: 'option4'
        },
        answer: 'option1'
    },
    {
        question: 'Question-',
        questionText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
        options: {
            option1: "option1",
            option2: 'option2',
            option3: 'option3',
            option4: 'option4'
        },
        answer: 'option3'
    },
    {
        question: 'Question-',
        questionText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
        options: {
            option1: "option1",
            option2: 'option2',
            option3: 'option3',
            option4: 'option4'
        },
        answer: 'option4'
    }
]
var data =[{
    _id      :"21973#2902",
    examName :"Physic end term",
    examCode :"CRSE#90",
    examDuration :"2h",
    examDate :"12-10-2019 2pm"
    },
{
    _id      :"21973#230",
    examName :"DBMS end term",
    examCode :"DMBS#90",
    examDuration :"4h",
    examDate :"10-09-2019"
    }
]
function abc() {
    alert('edit')
}

// function editQuestion() {
// //load template to display question
//     $.each(questions, (index, item) => {
//         let indexTemplate = $("#index-template").html();
//         $("#question-Index").append(Mustache.render(indexTemplate, { index: index + 1 }))
//         let questionContent = $("#question-template-body").html()
//         item.index = index + 1
//         $("#question-Display").append(Mustache.render(questionContent, item))

//     })

// }