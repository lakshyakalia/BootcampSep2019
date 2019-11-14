$(document).ready(function(){
    $.ajax('http://localhost:3000/loggedIn',{
        type: 'GET',
        dataType: 'JSON',
        headers:{
            "token":localStorage.getItem('token')
        },
        success: function(data){
            localStorage.setItem('name',data.name)
            document.getElementById('username').innerHTML = "Hie, "+data.name
        }
    })
})
$(document).on('click', '#checkAccessKey', function() {
    const tok = localStorage.getItem('token');

    if (tok == null) {
        location.replace("../../index.html")
    }
    $.ajax('http://localhost:45728/exam/accessKey', {
        type: 'POST',
        dataType: 'JSON',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            examCode: $(".inputBox").val()
        }),
        success: function(data) {
            console.log('success')
            localStorage.setItem('examCode', $(".inputBox").val())
            $(location).attr('href', '../views/instructions.html')
        },
        error: function(error) {
            console.log('error')
            $('.error-msg').text("Wrong Access key")
        }
    })
})

function logout() {
    localStorage.removeItem("token")
    location.replace("../../index.html")
}