function showQuestion(id) {
    // eid = $('#'+id).parent().parent().attr('id')
        let examCode = $('#' + id).parent().prev().prev().prev().find('p').html()
        let mainId = $('#' + id).parent().parent().parent().parent().attr('id')
        $('#' + mainId).hide()
    let url = "http://localhost:3000/exam/question/" + encodeURIComponent(examCode)
    $.ajax(url, {
        type: 'GET',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        headers: {
            'token': localStorage.getItem('token')
        },
        success: function(data) {
            if( data.msg == 'No question'){
                alert("No question added in this exam")
                return
            }
            $.each(data, (index, item) => {
                let indexTemplate = $("#index-template").html();
                item.index = index + 1
                $("#question-Index").append(Mustache.render(indexTemplate, item))
                if( item.questionImage != null ){
                    item.status = true
                }else{
                    item.status = false
                }
                let questionContent = $("#question-template-body").html()
                item.index = index + 1
                $("#question-Display").append(Mustache.render(questionContent, item))

            })
        },
        error: function(error) {
            if( error.responseText =='Not Found'){
                alert("Please add Question")
            }
        }
    })
}

function setQsId(id) {

    $("#delQ").attr('id', id)
}

function removeQuestion(id) {
    let qsId = $("#" + id).parent().parent().attr('id')
    $.ajax("http://localhost:3000/exam/question/" + qsId, {
        type: 'DELETE',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            'token': localStorage.getItem('token')
        },
        success: function(data) {
            location.reload(true)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function updateQues(id,type) {
    let opt1 = '',opt2= '', opt3= '', opt4 ='', answer =''
    let questionText= $('#addtestQuestion').val()
    let weightage = $('#addtestWeightage').val()
    if(type == 'multipleOption'){
       opt1 = $('#addtestOption1').val()
       opt2 = $('#addtestOption2').val()
       opt3 = $('#addtestOption3').val()
       opt4 = $('#addtestOption4').val()
       $.each($("input[name='option']:checked"), function () {
        if ($(this).val()) {
            answer += $(this).val() + " "
        }
     });
     answer = answer.trim()
    }else{
        opt1 = $("#addtestOption1G").val()
        opt2 = $("#addtestOption2G").val()
        opt3 = $("#addtestOption3G").val()
        opt4 = $("#addtestOption4G").val()
        answer = $("input[name='option1']:checked").val()
    }
    var formData = new FormData();
            formData.values('questionImage')

            var formData = new FormData();
            formData.append('questionText', questionText);
            formData.append('answer', answer);
            formData.append('option1', opt1);
            formData.append('option2', opt2);
            formData.append('option3', opt3);
            formData.append('option4', opt4);
            formData.append('weightage', weightage);
            formData.append('answerType', "multipleOption");
            formData.append('questionImage', $('input[type=file]')[0].files[0]);
            console.log("image is " + formData.values('questionImage'));
            // return
    $.ajax("http://localhost:3000/exam/question/" + id, {
        type: 'PATCH',
        dataType: 'json',
        contentType: false,
        processData: false,
        headers: {
            token: localStorage.getItem('token')
        },
        data: formData,
        success: function(data) {
            location.reload(true)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function editQuestion(id) {
    let qid = $("#" + id).parent().parent().attr('id')
    let pid = $("#" + qid).parent().parent().parent().parent().attr('id')

    $('#' + pid).hide()
    $.ajax("http://localhost:3000/exam/question/byid/" + qid, {
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            token: localStorage.getItem('token')
        },
        success: function(data) {

            if(data.answerType== "multipleOption"){
                let arr = data.answer.split(' ')
                let editTemplate = $("#edit-question-template").html();
                $("#display-edit-form").append(Mustache.render(editTemplate, data))
                    let checkBox = $('input[type=checkbox][name=option]')
                    $.each(checkBox,(i,chk)=>{
                        if( arr.includes($(chk).val())){
                            $(chk).prop('checked',true)
                        }
                    })
            }else if( data.answerType=="singleOption"){
                let editTemplate = $("#edit-single-option").html();
                $("#display-edit-form").append(Mustache.render(editTemplate, data))
                let radioBtn = $('input[type=radio][name=option1]')
                    $.each(radioBtn,(i,radio)=>{
                        if(radio.value == data.answer){
                        $(radio).prop('checked',true)
                   }
               })
                
            }
        },
        error: function(error) {
            console.log(error)
        }
    })

}

function updateExam(examObjId) {
    let examDetail = {
        examName: $('#addExamName').val(),
        examCode: $('#addExamCode').val(),
        examDuration: $('#addExamDuration').val(),
        examStartTime: $('#addExamDate').val(),
        instructions: $('#addExamInstruction').val()
    }
    $.ajax("http://localhost:3000/exam/" + examObjId, {
        type: 'PATCH',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            token: localStorage.getItem('token')
        },
        data: JSON.stringify(examDetail),
        success: function(data) {
            location.reload(true)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function editExamDetail(id) {
    let examObjId = $('#' + id).parent().parent().attr('id')
        // console.log('examid ',examId)
    let mainId = $('#' + id).parent().parent().parent().parent().attr('id')
    $('#' + mainId).hide()
    $.ajax("http://localhost:3000/exam/" + examObjId, {
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            'token': localStorage.getItem('token')
        },
        success: function(data) {
            //    console.log(data)
            // console.log(data.instructions)
            let editForm = $("#edit-exam-detail").html()
            $("#display-form").append(Mustache.render(editForm, data))
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function setId(id) {
    $("#del").attr('id', id)
}

function deleteExam(id) {
    examObjId = $('#' + id).parent().parent().attr('id')
    $.ajax("http://localhost:3000/exam/" + examObjId, {
        type: 'DELETE',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            token: localStorage.getItem('token')
        },
        success: function(data) {
            location.reload(true)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

$(document).ready(() => {
    $.ajax("http://localhost:3000/exam", {
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            token: localStorage.getItem('token')
        },
        success: function(data) {
            if( data.msg == 'No Exam'){
                alert("Exam Doesnot exist in your account")
                return
            }
            let parent = $(".exam-detail")
                // load html template to display exam detail
            $.each(data, (index, values) => {
                let html = $('#display-exam-detail').html()
                values.index = index
                parent.append(Mustache.render(html, values))
            })
        },
        error: function(error) {
            console.log(error)
        }
    })
})