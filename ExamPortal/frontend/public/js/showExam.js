
function showQuestion(id){
    // let testCode = $('#'+id).parent().prev().prev().find('p').html()
    console.log(id)
    let mainId = $('#'+id).parent().parent().parent().parent().attr('id')
    console.log(mainId)
    $('#'+mainId).hide()
    
    $(document).ready(()=>{
        $.ajax("http://localhost:3000/exam/question", {
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            success: function(data) {
                $.each(data, (index, item) => {
                    let indexTemplate = $("#index-template").html();
                    $("#question-Index").append(Mustache.render(indexTemplate, { index: index + 1 }))
                    let questionContent = $("#question-template-body").html()
                    item.index = index + 1
                    $("#question-Display").append(Mustache.render(questionContent, item))
            
                })
                },
            error: function(error) {
               console.log(error)
            }
        })
    })
}
function editQuestion(id) {
//load template to edit question
   console.log(id)
   let qid = $("#"+id).parent().parent().attr('id')
   console.log('qs id ',qid)
   let pid = $("#"+qid).parent().parent().parent().parent().attr('id')
   console.log(pid)
   $('#'+pid).hide()
   let editTemplate = $("#edit-question-template").html();
   $.each(questions,(index,val)=>{
        if(qid === val.questionId){
            console.log(val.questionId)
            $("#display-edit-form").append(Mustache.render(editTemplate, val))
        }
   })
}

function editExamDetail(id){
    let examId = $('#'+id).parent().parent().attr('id')
    console.log('examid ',examId)
    let mainId = $('#'+id).parent().parent().parent().parent().attr('id')
    $('#'+mainId).hide()
    let editForm = $("#edit-exam-detail").html()
    
    $("#display-form").append(Mustache.render(editForm,val))
}

function deleteExam(id){
    let testCode = $('#'+id).parent().prev().prev().prev().prev().prev().find('p').html()
    console.log(testCode)
}

$(document).ready(()=>{
    $.ajax("http://localhost:3000/exam", {
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        success: function(data) {

        //console.log(msg.responseText)
        let parent = $(".exam-detail")
        // load html template to display exam detail
        $.each(data, (index , values )=>{

        let html = $('#display-exam-detail').html()
        values.index = index
        parent.append(Mustache.render(html,values))
                })
            },
        error: function(error) {
           console.log(error)
        }
    })
})