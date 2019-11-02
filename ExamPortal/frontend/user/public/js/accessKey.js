$(document).on('click','#checkAccessKey',function(){
    $.ajax('http://localhost:3000/test/assessKey',{
        type:'POST',
        dataType:'JSON',
        data:{
            examCode: $(".inputBox").val()
        },
        success: function(data){
            localStorage.setItem('examCode',$(".inputBox").val())
            $(location).attr('href', '../views/instructions.html')
        },
        error: function(error){

        }
    })
})