function loadQuestions(data,startTime,duration){
    const questionTemplate = document.querySelector('#question-template').innerHTML
    setTimeForTest(startTime,duration)
    $('#options').empty()
    const op = document.querySelector('#options')
    for(i=0;i<data.length;i++){
        const html = Mustache.render(questionTemplate,{questions:data[i]})
        op.insertAdjacentHTML("beforeend",html)
    }
}

function setTimeForTest(time,duration){
    let testStartTime = new Date(time).getTime()
    let testEndTime = new Date(testStartTime+duration*60000).getTime()
    var x = setInterval(function(){
        let testPresentTime = new Date().getTime()
        let leftTestTime = testEndTime - testPresentTime
        var hours = Math.floor((leftTestTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((leftTestTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((leftTestTime % (1000 * 60)) / 1000);
        document.getElementById("showTime").innerHTML = hours + "h "+ minutes + "m " + seconds + "s ";
        if (leftTestTime < 0) {
            clearInterval(x);
            $(location).attr('href','./endTest.html')
        }
    },1000)
}

$(document).ready(function(){
    // In real, exam code would be stored when user login to test sucessfully
    localStorage.setItem('code','1199')
    $('#nextQuestion').attr('value',0)
    $('#previousQuestion').attr({'value':0,'disabled':true})
    $.ajax('http://localhost:9000/test',{
        type:'GET',
        dataType: 'JSON',
        headers: {
            code: localStorage.getItem('code'),
            studentId: '5db3bcf0c5c7e513cc5c85d9'
        },
        data:{
            pageNumber: $('#nextQuestion').attr('value')
        },
        success: function(data){
            data.duration = parseInt(data.duration)
            loadQuestions(data.questions,data.startTime,data.duration)
        },
        error: function(err){
            console.log(err)
        }
    })
})

$(document).on('click','#submitAnswer',function(){
    let questionId = $(this).parent().parent().parent().parent().children().children().children().attr('id')
    let examCode = $(this).parent().parent().parent().parent().children().children().children().children().attr('id')
    let radioValue = $(`input[name=${questionId}]:checked`).val()
    $.ajax('http://localhost:9000/test',{
        type: 'POST',
        dataType: 'JSON',
        //In real student ID would be fetched from token
        headers:{
            studentId: '5db3bcf0c5c7e513cc5c85d9'
        },
        data:{
            code: examCode,
            checkedOption: radioValue,
            qId : questionId
        },
        success: function(data){
            console.log(data.msg)
        },
        error: function(error){
            console.log(error)
        }
    })
})

$(document).on('click','#nextQuestion',function(){
    let page = parseInt($('#nextQuestion').attr('value'))
    $('#nextQuestion').attr('value',page+1)
    if( $('#nextQuestion').attr('value')!= 0){
        $('#previousQuestion').removeAttr("disabled");
    }
    
    $.ajax('http://localhost:9000/test',{
        type:'GET',
        dataType: 'JSON',
        headers: {
            code: localStorage.getItem('code'),
            studentId: '5db3bcf0c5c7e513cc5c85d9'
        },
        data:{
            pageNumber: $('#nextQuestion').attr('value')
        },
        success: function(data){
            loadQuestions(data.questions)
            if(data.lastQuestionStatus === true){
                $('#nextQuestion').attr('disabled',true)
            }
        },
        error: function(err){
            console.log(err)
        }
    })
})

$(document).on('click','#previousQuestion',function(){
    let pageNumber = parseInt($('#nextQuestion').attr('value'))-1
    $('#nextQuestion').attr('value',pageNumber)
    if(pageNumber == 0){
        $('#previousQuestion').attr({'value':0,'disabled':true})
    }
    $.ajax('http://localhost:9000/test',{
        type:'GET',
        dataType: 'JSON',
        headers: {
            code: localStorage.getItem('code'),
            studentId: '5db3bcf0c5c7e513cc5c85d9'
        },
        data:{
            pageNumber: pageNumber
        },
        success: function(data){
            if(data.lastQuestionStatus === false){
                $('#nextQuestion').removeAttr('disabled')
            }
            loadQuestions(data.questions)
        },
        error: function(err){
            console.log(err)
        }
    })
})

$(document).on('click','#modalEndTest',function(){
    $(location).attr('href','./endTest.html')
})

$(document).on('click','#resetRadio',function(){
    $('.form-check-radio').prop("checked",false)
})