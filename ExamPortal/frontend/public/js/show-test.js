var data =[{
    testName :"Physic end term",
    testCode :"CRSE#90",
    testDate :"12-10-2019 2pm"
    },
{
    testName :"DBMS end term",
    testCode :"DMBS#90",
    testDate :"12-10-2019 11;30am"
    }
]

// this page will create dom to display questions
var questions = [{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ]
},
{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ]
},
{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options :[
        'option1','option2','option3','option4'
    ]
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

function showQuestion(id){
    // let testCode = $('#'+id).parent().prev().prev().find('p').html()
    // console.log(testCode)
    let testId = $('#'+id).parent().parent().parent().parent().attr('id')
    console.log(testId)
    $('#'+testId).hide()
    editQuestion()
}
function deleteTest(id){
    let testCode = $('#'+id).parent().prev().prev().prev().find('p').html()
    console.log(testCode)
}
$(document).ready(()=>{
    let parent = $(".test-detail")
//create DOM to display tests as per its need
    for ( let i = 0; i < data.length; i++ ){
        let row = document.createElement('div')
        row.className = 'row content'

        let col1 = document.createElement('div')
        col1.className = 'col-md-3'
        let p1 = document.createElement('p')
        p1.innerHTML = data[i].testName
        col1.append(p1);
        row.append(col1)

        let col2 = document.createElement('div')
        col2.className = 'col-md-2'
        let p2 = document.createElement('p')
        p2.innerHTML = data[i].testCode
        col2.append(p2)
        row.append(col2)

        let col3 = document.createElement('div')
        col3.className = 'col-md-3'
        let p3 = document.createElement('p')
        p3.innerHTML = data[i].testDate
        col3.append(p3)
        row.append(col3)

        let col4 = document.createElement('div')
        col4.className = 'col-md-2'
        let btn1 = document.createElement('button')
        btn1.type = 'button'
        btn1.className = 'btn btn-outline-info'
        btn1.id = 'view'+i
        btn1.setAttribute('onclick','showQuestion(this.id)')
        btn1.innerHTML = 'View'
        col4.append(btn1)
        row.append(col4);

        let col5 = document.createElement('div')
        col5.className = 'col-md-2'
        let btn2 = document.createElement('button')
        btn2.type = 'button'
        btn2.id = 'delete'+i
        btn2.className = 'btn btn-outline-danger'
        btn2.setAttribute('onclick','deleteTest(this.id)')
        btn2.innerHTML = 'Delete'
        col5.append(btn2)
        row.append(col5)

        parent.append(row)
    }
})