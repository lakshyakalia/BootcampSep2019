$(document).on('click', '.startTest', function() {
    $(location).attr('href', './question.html')
})

function checkTimeForTest(time){
    
    
    var x = setInterval(function(){
        let startTime = new Date(time).getTime()
        let presentTime = new Date().getTime()
        if(presentTime>startTime){
            clearInterval(x)
            $('.startTest').removeAttr("disabled")
        }
    },1000)

}

$(document).ready(function(){

    $.ajax('http://localhost:3000/test/accessKey',{
        type:'GET',
        dataType:'JSON',
        data:{
            examCode: localStorage.getItem("examCode")
        },
        success: function(data){
            checkTimeForTest(data.examStartTime)
        },
        error: function(error){

        }
    })
})