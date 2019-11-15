var box=1
var count_X=0
var count_O=0
var count=0

$(document).ready(function(){
    $("#1").click(function(){
      $("#1").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#2").click(function(){
      $("#2").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#3").click(function(){
      $("#3").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#4").click(function(){
      $("#4").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#5").click(function(){
      $("#5").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#6").click(function(){
      $("#6").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#7").click(function(){
      $("#7").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#8").click(function(){
      $("#8").css("color", "white").fadeOut(250).fadeIn(10);
    });
    $("#9").click(function(){
      $("#9").css("color", "white").fadeOut(250).fadeIn(10);
    });
  });
  

function clicked(elementName){
  
    var val =document.getElementById(elementName).innerHTML;
     if (val=="") 
     {
        if(box==1){
                document.getElementById(elementName).innerHTML="X";
                box=0;
                document.getElementById(elementName).setAttribute("data-points","-1");

       }
       else if(box==0){
                box=1;
                document.getElementById(elementName).innerHTML="O";  
                document.getElementById(elementName).setAttribute("data-points","1");
        } 
       
     }
     else
        {
         location.alert("Tile is in use. Please select another tile.");
       }

       checkResult(count);
}


var arr = new Array(3); 

for (var i = 0; i < arr.length; i++) { 
    arr[i] = new Array(3); 
} 
  
var h = 0; 
 
for (var i = 0; i < 3; i++) { 
    for (var j = 0; j < 3; j++) { 
        arr[i][j] = 0; 
    } 
} 
// var count1=1;

function checkResult(count){
var elementId=1;
    count=0;
    for (var i = 0; i < 3; i++) { 
        for (var j = 0; j < 3; j++) { 
            var x=document.getElementById(elementId).getAttributeNode('data-points').value; 
            arr[i][j] = parseInt(x); 
            elementId ++;
        } 
    } 
    console.log(arr)

    for(var i = 0; i<3;i++){
        var rowSum = 0;
        for(var j = 0; j<3;j++){
            rowSum += arr[i][j];
        }
        if(rowSum === 3){
            alert("Circle WIN!");
            location.reload();
        }
        else if(rowSum === -3){
            alert("Cross WIN!");
            location.reload();
        }
    }

    for(var i = 0; i<3;i++){
        var colSum = 0;
        for(var j = 0; j<3;j++){
            colSum += arr[j][i];
        }
        if(colSum === 3){
            alert("Circle WIN!");
            location.reload();
        }
        else if(colSum === -3){
            alert("Cross WIN!");
            location.reload();
        }
    }

    if(arr[0][0] + arr[1][1] + arr[2][2] === 3){
        alert("Circle WIN!");
        location.reload();
    }
        
    else if(arr[0][0] + arr[1][1] + arr[2][2] === -3){
        alert("Cross WIN!");
        location.reload();
    }
        

    if(arr[2][0] + arr[1][1] + arr[0][2] === 3){
        alert("Circle WIN!");
        location.reload();
    }
        
    else if(arr[2][0] + arr[1][1] + arr[0][2] === -3){
        alert("Cross WIN!");
        location.reload();
    }
        
        
}

