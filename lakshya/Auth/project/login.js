$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        var name = document.getElementById("username").value;

        var pass = document.getElementById("pwd").value;


        console.log(name);
        $.ajax("http://localhost:50365/api/Login", {
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            headers:{
                "Username": name,
                "Password": pass
            },
            data: JSON.stringify(
                {

                    "Username": name,
                    "Password": pass
                }
            ),
            success: function (headers, status) {
                console.log("yo", headers, status);
                localStorage.setItem('token',headers.token);
                window.location.replace("mainscreen.html");
            },
            error: function (msg) {
                alert(msg.responseText);
            }
        });
    });
});