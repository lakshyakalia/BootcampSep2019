$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        var name = document.getElementById("username").value;
        
        var pass = document.getElementById("pwd").value;
        
       
        console.log(name);
        $.ajax("http://localhost:50365/api/values", {
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(
                {
                    
                    "Username": name,
                    "Password": pass
                    
                }
            ),
            success: function (data, status) {
                console.log("yo", data, status);
                window.location.replace("mainscreen.html");
            },
            error: function () {
                alert("sonething went wrong");
            }
        });
    });
});