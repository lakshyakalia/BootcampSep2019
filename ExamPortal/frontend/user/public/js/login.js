$(document).on('click','#loginButton',function(){
    let email = $('#inputEmail').val()
    let password = $('#inputPassword').val()
    
    $.ajax('http://localhost:3000/login',{
        type:'POST',
        dataType:'JSON',
        data:{
            'email':email,
            'password':password
        },
        success: function(data){
            localStorage.setItem('token',data.token)
        },
        error: function(error){
            console.log(error)
        }

    })
})