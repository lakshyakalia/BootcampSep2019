$(document).on('click', '.startTest', function() {
    $.ajax('http://localhost:3000/test/accessKey',{
        type:'GET',
        dataType:'JSON',
        headers:{
            examCode: localStorage.getItem('examCode'),
            token: localStorage.getItem('token')
        },
        data:{
            examCode: localStorage.getItem("examCode")
        },
        success: function(data){
            if(data.submitStatus){
                $('.error-msg').text("Test is already Submitted")
            }
            else{
                $(location).attr('href', './question.html')
            }
            
        },
        error: function(error){ }
    })
    
})

function checkTimeForTest(time){
    var x = setInterval(function(){
        var startDate = new Date(time).getTime()
        var presentDate = new Date().getTime()
        let startTime = new Date(time).getTime()
        let presentTime = new Date().getTime()
        if((presentTime>startTime) && (presentDate>=startDate)){
            clearInterval(x)
            $('.startTest').removeAttr("disabled")
        }
    },1000)

}

$(document).ready(function(){
    $.ajax('http://localhost:3000/test/accessKey',{
        type:'GET',
        dataType:'JSON',
        headers:{
            examCode: localStorage.getItem('examCode'),
            token: localStorage.getItem('token')
        },
        data:{
            examCode: localStorage.getItem("examCode")
        },
        success: function(data){
            checkTimeForTest(data.examData.examStartTime)
        },
        error: function(error){ }
    })
})