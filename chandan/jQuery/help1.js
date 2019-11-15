var player=1;
var c=0;

$(document).ready(function(){
   $("#btn1").click(function(){
     var div = $("#btn1");
     div.animate({width: '37px', opacity: '0.4'}, "500");
     div.animate({height: '37px', opacity: '0.4'}, "500");
     div.animate({width: '100px', opacity: '0.4'}, "500");
     div.animate({height: '100px', opacity: '0.4'}, "");
   });

   $("#btn2").click(function(){
      var div = $("#btn2");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });

    $("#btn3").click(function(){
      var div = $("#btn3");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });

    $("#btn4").click(function(){
      var div = $("#btn4");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });

    $("#btn5").click(function(){
      var div = $("#btn5");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });

    $("#btn6").click(function(){
      var div = $("#btn6");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });

    $("#btn7").click(function(){
      var div = $("#btn7");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });
    $("#btn8").click(function(){
      var div = $("#btn8");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });
    $("#btn9").click(function(){
      var div = $("#btn9");
      div.animate({width: '37px', opacity: '0.4'}, "500");
      div.animate({height: '37px', opacity: '0.4'}, "500");
      div.animate({width: '100px', opacity: '0.4'}, "500");
      div.animate({height: '100px', opacity: '0.4'}, "500");
    });
 });



function fun(btn){
if(player==1)
{
   document.getElementById(btn).value="X";
   document.getElementById(btn).disabled="disabled"; 
  player=0;
 checkresult();
}
else
{
    document.getElementById(btn).value="0";
    document.getElementById(btn).disabled="disabled";
    
    player=1;
    checkresult();
}
}
function checkresult(){
    if(document.getElementById("btn1").value=="X"&&
       document.getElementById("btn2").value=="X"&&
       document.getElementById("btn3").value=="X"||
       document.getElementById("btn4").value=="X"&&
       document.getElementById("btn5").value=="X"&&
       document.getElementById("btn6").value=="X"||
       document.getElementById("btn7").value=="X"&&
       document.getElementById("btn8").value=="X"&&
       document.getElementById("btn9").value=="X"||
       document.getElementById("btn1").value=="X"&&
       document.getElementById("btn4").value=="X"&&
       document.getElementById("btn7").value=="X"||
       document.getElementById("btn2").value=="X"&&
       document.getElementById("btn5").value=="X"&&
       document.getElementById("btn8").value=="X"||
       document.getElementById("btn3").value=="X"&&
       document.getElementById("btn6").value=="X"&&
       document.getElementById("btn9").value=="X"||
       document.getElementById("btn3").value=="X"&&
       document.getElementById("btn5").value=="X"&&
       document.getElementById("btn7").value=="X"||
       document.getElementById("btn1").value=="X"&&
       document.getElementById("btn5").value=="X"&&
       document.getElementById("btn9").value=="X"
       )
       {
          alert("X IS WINNER");
          location.reload();
         //  reset();
       }
    else if(document.getElementById("btn1").value=="0"&&
    document.getElementById("btn2").value=="0"&&
    document.getElementById("btn3").value=="0"||
    document.getElementById("btn4").value=="0"&&
    document.getElementById("btn5").value=="0"&&
    document.getElementById("btn6").value=="0"||
    document.getElementById("btn7").value=="0"&&
    document.getElementById("btn8").value=="0"&&
    document.getElementById("btn9").value=="0"||
    document.getElementById("btn1").value=="0"&&
    document.getElementById("btn4").value=="0"&&
    document.getElementById("btn7").value=="0"||
    document.getElementById("btn2").value=="0"&&
    document.getElementById("btn5").value=="0"&&
    document.getElementById("btn8").value=="0"||
    document.getElementById("btn3").value=="0"&&
    document.getElementById("btn6").value=="0"&&
    document.getElementById("btn9").value=="0"||
    document.getElementById("btn3").value=="0"&&
    document.getElementById("btn5").value=="0"&&
    document.getElementById("btn7").value=="0"||
    document.getElementById("btn1").value=="0"&&
    document.getElementById("btn5").value=="0"&&
    document.getElementById("btn9").value=="0"
    )
    {
       alert("O IS WINNER");
       location.reload();
      //  reset();
    }
    else{
        c=c+1;
    }
    if(c==9)
    {
       alert("DRAW");
       c=0;
       location.reload();
      //  reset();
    }
   }   

// function reset()
// {
//     document.getElementById("btn1").value="";
//     document.getElementById("btn2").value="";
//     document.getElementById("btn3").value="";
//     document.getElementById("btn4").value="";
//     document.getElementById("btn5").value="";
//     document.getElementById("btn6").value="";
//     document.getElementById("btn7").value="";
//     document.getElementById("btn8").value="";
//     document.getElementById("btn9").value="";
// }