$(document).ready(function(){
     $.ajax("http://127.0.0.1:3000/examiner",{
        type:"GET",
        dataType:"json",
        contentType:"application/json",
            success:function(recent){ 
                display(recent);
             // console.log(recent);
            },
            error:function()
            {
                console.log("Something went wrong");
            }
            
          });
      });
      function display(recent)
      {
          const displaytemplate=document.querySelector("#index-template").innerHTML;
          const html=Mustache.render(displaytemplate,{data:recent}) 
          const performance=document.querySelector("#performance");
          performance.insertAdjacentHTML("beforeend",html)
        }