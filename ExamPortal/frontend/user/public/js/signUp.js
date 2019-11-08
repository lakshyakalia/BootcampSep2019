$(document).ready(function () {
    $("#signUpSubmit").addEventListener('click', validate)
    function validate() {
        var firstName = $("#firstName").val()
        var lastName = $("#lastName").val()
        Email = $("#inputEmail").val()
        var PhoneNumber = $("#phoneNumber").val()
        var Password = $("#inputPassword").val()
        confirmPassword = $("#cnfPassword").val()
        if (Password != confirmPassword)
            return alert("Confirm Password does not match")

        if (firstName === "") {
            return alert("Please enter First Name")
        } else {
            var regex = /^[a-zA-Z\s]+$/;
            if (regex.test(firstName) === false) {
                $("#firstName").innerHTML = ""
                alert("Please enter a valid first name");
            } else {
                firstName = true;
            }
        }
        if (lastName === "") {
            alert("Please enter your last name");
        } else {
            lastName = true
            var regex = /^[a-zA-Z\s]+$/;
            if (regex.test(lastName) === false) {
                alert("Please enter a valid last name");
            } else {
                lastName = true;
            }
        }
        if((firstName == true) && (lastName == true)){
            name = firstName+" "+ lastName
        }
        if (PhoneNumber == "") {
            alert("Please enter your mobile number");
        }
        if (document.getElementById("#PhoneNumber").validity.rangeOverflow) {
            alert("Please enter a valid 10 digit number")
        }
        else if (document.getElementById("#PhoneNumber").validity.rangeUnderflow) {
            alert("Please enter a valid 10 digit number")
        }
        else {
            PhoneNumber = true
        }

    }

    if ((firstName && lastName && Email && Password && PhoneNumber) == true) {
        let signUpData = {
            // firstName = $("#firstName").val(),
            // lastName = $("#lastName").val(),
            name = firstName + " " + lastName,
            email = $("#inputEmail").val(),
            phoneNumber = $("#PhoneNumber").val(),
            password = $("#inputPassword").val(),
            accountType = "Student"
        }
       
    } else {
        signUpData = false
        alert("Your data is not valid")
    }
    $.ajax("http://localhost:3000/signUp", {
        type: "POST",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(signUpData),
            // "name": name,
            // "email": email,
            // "PhoneNumber": PhoneNumber,
            // "password": password,
            // "accountType": accountType
        // }),
        success: function (data, status) {
            alert("Your SignUp has been successful")
            $(location).attr('href', '../views/login.html')
        },
        error: function (data, error) {
            console.log(error + " " + "error occurred");
        }
    })
})