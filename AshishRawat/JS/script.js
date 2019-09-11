var box=0;
function clicked(elementbyid)
{
var con = document.getElementById(elementbyid).innerHTML;
  if(con=="")
  {
      if(box==0)
      {
        box=1;
          document.getElementById(elementbyid).innerHTML="X";
          
          document.getElementById(elementbyid).setAttribute("data-points","-1");

      }
      else if(box==1)
      {
        box=0;
          document.getElementById(elementbyid).innerHTML="O";
          document.getElementById(elementbyid).setAttribute("data-points","1");

          
      }
  }
  else
  {
    window.alert("Select another tile");
  }
    checkResult();
  }
var arr= new Array(3);
for(i=0;i<arr.length;i++)
{
    arr[i]=new Array(3);
}
for (var i = 0; i < 3; i++) 
{ 
for (var j = 0; j < 3; j++) 
{ 
    arr[i][j] = 0; 
} 
}
/*----------------------------JQUERY_ANIMATE----------------------------------------*/
$(document).ready(function(){
$("#ta").fadeIn(3000);
});
$(document).ready(function(){
    $("#1").click(function(){
        $("#1").css("color","white").fadeOut(200).fadeIn(12);
    });
    });
    $(document).ready(function(){
    $("#1").click(function(){
        $("#1").css("color","white").fadeOut(200).fadeIn(12);
    });
    });
    $(document).ready(function(){
        $("#2").click(function(){
            $("#2").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#3").click(function(){
            $("#3").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#4").click(function(){
            $("#4").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#5").click(function(){
            $("#5").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#6").click(function(){
            $("#6").css("color","white").fadeOut(200).fadeIn(12);
        });
         });
    $(document).ready(function(){
        $("#7").click(function(){
            $("#7").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#12").click(function(){
            $("#12").css("color","white").fadeOut(200).fadeIn(12);
        });
        });
    $(document).ready(function(){
        $("#9").click(function(){
            $("#9").css("color","white").fadeOut(200).fadeIn(12);
        });
        }); 
/*----------------------------JQUERY_ANIMATE----------------------------------------*/

function checkResult(){
    var elementId=1;
        count=0;
        for (var i = 0; i < 3; i++) { 
            for (var j = 0; j < 3; j++) { 
                var x=document.getElementById(elementId).getAttributeNode('data-points').value; 
                arr[i][j] = parseInt(x); 
                elementId ++;
            } 
        } 
        for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += arr[i][j];
            }
            if(rowSum === 3)
            {
                alert("Circle WIN!");
                location.reload();
            }
            else if(rowSum === -3)
            {
                alert("Cross WIN!");
                location.reload();
            }
        }
    
        for(var i = 0; i<3;i++){
            var colSum = 0;
            for(var j = 0; j<3;j++){
                colSum += arr[j][i];
            }
            if(colSum === 3)
            {
                alert("Circle WIN!");
                location.reload();
            }
            else if(colSum === -3)
            {
                alert("Cross WIN!");
                location.reload();
            }
        }
    
        if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
        {
            alert("Circle WIN!");
            location.reload();
        }
        else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
        {
            alert("Cross WIN!");
            location.reload();
        }
    
        if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
        {
            alert("Circle WIN!");
            location.reload();
        }  
        else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
        {
            alert("Cross WIN!");
            location.reload();
        }

}
    