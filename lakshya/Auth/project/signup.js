$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var college_name = document.getElementById("clgname").value;
        var college_id =parseInt( document.getElementById("clgid").value);
       
        console.log(name);
        $.ajax("http://localhost:50365/api/values", {
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(
                {
                    "Name": name,
                    "Username": email,
                    "Password": pass,
                    "Collegeid": college_id,
                    "Collegename": college_name
                }
            ),
            success: function (data, status) {
                console.log("yo", data, status);
                
                window.location.replace("index.html");
            },
            error: function () {
                alert("sonething went wrong");
            }
        });
    });
});