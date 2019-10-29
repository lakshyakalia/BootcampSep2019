// this page will create dom to display questions
var questions = [{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    options = [
        'option1','option2','option3','option4'
    ]
}]
 function editQuestion(){
    console.log(questions)

    // for ( let i = 0; i< questions.length; i++ ){

    //     let rowDiv = document.createElement('div')

    //     let col1 = document.createElement('div')
    //     col1.className = 'col-md-2'
    //     let anchorTag = document.createElement('a')
    //     anchorTag.href ='#question'+i
    //     anchorTag.innerHTML = questions[i].question+i+1
    //     col1.append(anchorTag)
    //     rowDiv.append(col1)

    //     let col2 = document.createElement('div')
    //     col2.className = 'col-md-10'

    //     let innerRowDiv = document.createElement('div')
    //     innerRowDiv.className ='row'

    //     let innerCol1 = document.createElement('div')
    //     innerCol1.className = 'col-md-12 question-div'
    //     innerCol1.id = 'question'+i

    //     let h3 = document.createElement('h3')
    //     h3.innerHTML = questions[i].question +i+1
    //     innerCol1.append(h3)

    //     let para = document.createElement('p')
    //     para.innerHTML = questions[i].questionText
    //     innerCol1.append(para)

    //     let ul = document.createElement('ul')
    //     ul.setAttribute('list-style-type','circle')

    //     for ( let j = 0; j < questions[i].options.length; j++ ){
    //         let li = document.createElement('li')
    //         li.innerHTML = questions[i].options[j]
    //         ul.append(li)
    //     }
    //     innerCol1.append(ul)

    //     let editBtn = document.createElement('button')
    //     editBtn.type = 'button'
    //     editBtn.id ='edit'+i
    //     editBtn.className = 'btn btn-outline-info'
    //     editBtn.innerHTML ='Edit'
    //     innerCol1.append(editBtn)

    //     let deleteBtn = document.createElement('button')
    //     deleteBtn.type ='button'
    //     deleteBtn.className = 'btn btn-outline-danger'
    //     deleteBtn.id ='del'+i
    //     deleteBtn.innerHTML = 'Delete'
    //     innerCol1.append(deleteBtn)

    //     innerRowDiv.append(innerCol1)
    //     col2.append(innerCol1)
    //     rowDiv.append(col2)

    //     $('#mainDiv').append(rowDiv)
    // }
}
