var array = [[], [], []]
    // document.write("creatin a 2D array<br>");
for(var i=0;i<3;i++){
    array[i]=[0, 0, 0]
}

for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        array[i][j]=0;
    }
}

console.log(array);

var count=0
function myfunc(Element_id){
    //var selected=0;
    var input=document.getElementById(Element_id).innerHTML;
    if(input==""){
     if(count==0)
     {
         document.getElementById(Element_id).innerHTML="X";
         count=1;
     }
     else if(count==1){
        count=0;
             document.getElementById(Element_id).innerHTML="O";
             
         }
     }
    addToArray()
}
var x=0
var flag=0
function addToArray(){

    array[0][0] = document.getElementById("1").innerHTML;
    array[0][2] = document.getElementById("3").innerHTML;
    array[1][0] = document.getElementById("4").innerHTML;
    array[1][1] = document.getElementById("5").innerHTML;
    array[0][1] = document.getElementById("2").innerHTML;
    array[1][2] = document.getElementById("6").innerHTML;
    array[2][0] = document.getElementById("7").innerHTML;
    array[2][1] = document.getElementById("8").innerHTML;
    array[2][2] = document.getElementById("9").innerHTML;
    
           checkWinner();
    
}
function checkWinner(){
    flag++;
        if(array[0][0]==array[0][1] && array[0][1]==array[0][2] && (array[0][0]=="X" || array[0][0]=="O")){
            window.alert(array[0][0] + "is the winner");
        }
        else if(array[1][0]==array[1][1] && array[1][1]==array[1][2] && (array[1][0]=="X" || array[0][0]=="O")){
            window.alert(array[1][0] + "is the winner");
        }
        else if(array[2][0]==array[2][1] && array[2][1]==array[2][2] && (array[2][0]=="X" || array[0][0]=="O")){
            window.alert(array[2][0] + "is the winner");
        }
        else if(array[0][0]==array[1][0] && array[1][0]==array[2][0] && (array[0][0]=="X" || array[0][0]=="O")){
            window.alert(array[0][0] + "is the winner");
        }
        else if(array[0][1]==array[1][1] && array[1][1]==array[2][1] && (array[0][1]=="X" || array[0][0]=="O")){
            window.alert(array[0][1] + "is the winner");
        }
        else if(array[0][2]==array[1][2] && array[1][2]==array[2][2] && (array[0][2]=="X" || array[0][0]=="O")){
            window.alert(array[0][2] + "is the winner");
        }
        else if(array[0][0]==array[1][1] && array[1][1]==array[2][2] && (array[0][0]=="X" || array[0][0]=="O")){
            window.alert(array[0][0] + "is the winner");
        }
        else if(array[0][2]==array[1][1] && array[1][1]==array[2][0] && (array[0][2]=="X" || array[0][0]=="O")){
            window.alert(array[0][2] + "is the winner");
        }
        // if((array[0][0]=="X" || array[0][0]=="O")){
        //     window.alert("Match Draw");
        // }
        if(flag==9){
            window.alert("Match Draw");
        }
    }
   

  

