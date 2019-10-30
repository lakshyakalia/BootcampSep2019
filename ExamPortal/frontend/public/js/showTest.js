var data =[{
    testName :"Physic end term",
    testCode :"CRSE#90",
    testDuration :"12-10-2019 2pm",
    testDate :"12:40"
    },
{
    testName :"DBMS end term",
    testCode :"DMBS#90",
    testDuration :"12-10-2019 11;30am",
    testDate :"12:40"
    }
]

function showQuestion(id){
    // let testCode = $('#'+id).parent().prev().prev().find('p').html()
    console.log(id)
    let testId = $('#'+id).parent().parent().parent().parent().attr('id')
    console.log(testId)
    $('#'+testId).hide()
    editQuestion()
}
function deleteTest(id){
    let testCode = $('#'+id).parent().prev().prev().prev().prev().find('p').html()
    console.log(testCode)
}

$(document).ready(()=>{

    let parent = $(".test-detail")
//load html template to display exam detail
    $.each(data, (index , values )=>{

       let html = $('#display-exam-detail').html()
       values.index = index
        parent.append(Mustache.render(html,values))

    })
})