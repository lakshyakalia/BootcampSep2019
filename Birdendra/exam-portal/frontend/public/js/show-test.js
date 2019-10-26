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
];
var questions = [{
    question :'Question-',
    questionText : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis illum velit blanditiis',
    option1 : 'option1',
    option2 : 'option2',
    option3 : 'option3',
    option4 : 'option4'
}]
function showQuestion(id){
    let testCode = $('#'+id).parent().prev().prev().find('p').html()
    console.log(testCode)
    editQuestion();
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
        btn1.id = 'edit'+i
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