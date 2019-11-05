function logout()
{
   localStorage.removeItem("token");
   window.location.replace("../../user/views/login.html");
}
$(document).ready(function(){
     $("#submit").click(function(e){
        e.preventDefault();
        var email=document.getElementById("email").value;
        var name=document.getElementById("name").value;
        var password=document.getElementById("password").value;
        var accountype=document.getElementById("accountype").value;
        var phoneno=document.getElementById("phoneno").value;
        var collegename=document.getElementById("collegename").value;
       // var a=phoneno.toString().length;
        //console.log(a);
         if(email==="")
         {
            window.alert("Email must be added");
         }
         else if(name==="")
         {
          window.alert("Name must be added");
         }
         else if(password==="")
         {
          window.alert("Password must be added");
         }
         else if((phoneno.toString().length !=10))
         {
          window.alert("Phoneno must be valid");
         }
         else if(collegename==="")
         {
          window.alert("College Name must be added");
         }
        if(!email==""&&!name==""&&!password==""&&!phoneno.toString().length !=10&&!collegename=="")
        {
          console.log("hello buddy");
      $.ajax("http://127.0.0.1:3000/examiner",{
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        
            data:JSON.stringify(
                {
                  "email":email,
                  "name":name,
                  "password":password,
                  "accountType":accountype,
                  "collegeName":collegename,
                  "phoneNumber":phoneno

                }
            ),
            success:function(recent){ 
              console.log("Data inserted");
              window.location.replace("adminHome.html")
            },
            error:function()
            {
                console.log("Something went wrong");
            }
            
          });
        }
       });
  });