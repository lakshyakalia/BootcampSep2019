// this page will create dom to display questions
// this page will create dom to display questions
var questions = [{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ],
    answer :'option1'
},
{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ],
    answer :'option3'
},
{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ],
    answer :'option4'
}
]


 function editQuestion(){

    for ( let i = 0; i< questions.length; i++ ){

        let anchorTag = document.createElement('a')
        anchorTag.href ='#question'+i
        anchorTag.innerHTML = questions[i].question+eval(i+1)
        $("#question-Index").append(anchorTag)

        let br = document.createElement('br')
        $("#question-Index").append(br)

        let innerRowDiv = document.createElement('div')
        innerRowDiv.className ='row'
        $("#question-Display").append(innerRowDiv)

        let innerCol1 = document.createElement('div')
        innerCol1.className = 'col-md-12 question-div'
        innerCol1.id = 'question'+i
        innerRowDiv.append(innerCol1)

        let h3 = document.createElement('h3')
        h3.innerHTML = questions[i].question + eval(i+1)
        innerCol1.append(h3)

        let para = document.createElement('p')
        para.innerHTML = questions[i].questionText
        innerCol1.append(para)

        let ul = document.createElement('ul')
        ul.setAttribute('list-style-type','circle')

        for ( let j = 0; j < questions[i].options.length; j++ ){
            let li = document.createElement('li')
            li.innerHTML = questions[i].options[j]
            ul.append(li)
        }
        innerCol1.append(ul)

        let h6 = document.createElement('h6')
        h6.innerHTML = 'Answer : '+questions[i].answer
        innerCol1.append(h6)

        let btnDiv = document.createElement('div')
        btnDiv.className = 'btn1'

        let editBtn = document.createElement('button')
        editBtn.type = 'button'
        editBtn.id ='edit'+i
        editBtn.className = 'btn btn-outline-info'
        editBtn.innerHTML ='Edit'
        btnDiv.append(editBtn)
        innerCol1.append(btnDiv)

        let deleteBtn = document.createElement('button')
        deleteBtn.type ='button'
        deleteBtn.className = 'btn btn-outline-danger'
        deleteBtn.id ='del'+i
        deleteBtn.innerHTML = 'Delete'
        btnDiv.append(deleteBtn)
        innerCol1.append(btnDiv)
    }
}
