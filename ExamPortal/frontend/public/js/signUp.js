$(document).ready( function(){

    $("#signUpSubmit").click((event)=>{
        console.log("qwertyui")
        event.preventDefault()
        fname = $("#firstName").val(),
       // console.log(fname)
        lname = $("#lastName").val(),
       // console.log(lname)
       name = fname+" "+lname
       //console.log(name)
        email = $("#inputEmail").val(),
       // console.log(email)
        phoneNumber = $("#phoneNumber").val(),
       // console.log(phoneNumber)
        password = $("#inputPassword").val(),
       // console.log(password)
        confirmPassword = $("#cnfPassword").val(),
        //console.log(confirmPassword)
        accountType = $("#accountType").val()
       // console.log(accountType)
        if(password != confirmPassword)
        return alert("Confirm Password does not match")
        if(fname === ""){
            return alert("Please enter First Name")
        }
        else{
            fname = true
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(fname) === false) {
                alert("Please enter a valid first name");
            } 
            else{
                fname = true;
            }
        }
        if(lname === "") {
            alert("Please enter your last name");
        }
        else {
            lname = true
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(lname) === false) {
                alert("Please enter a valid last name");
            } 
            else{
                lname = true;
            }
        }
        $.ajax("http://localhost:3000/signUp", {
            type: "POST",
            dataType: "json",
            // headers: {
            //    token: localStorage.getItem('userToken')
            // },   
            contentType: "application/json;charset=utf-8",
   
            data: JSON.stringify({
               
               "name" : name,
               "email": email,
               "phoneNumber" : phoneNumber,
               "password" : password,
               "accountType" : accountType

            }),
            success: function (data, status) {
               console.log(data.msg)
               $(location).attr('href', '../views/login.html')
            },
            error: function (data, error) {
               //  console.log(error +" "+ "error occurred");
            }
         })
      })
        
    })