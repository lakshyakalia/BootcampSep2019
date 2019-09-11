// var array = [[], [], []]
//     // document.write("creatin a 2D array<br>");
// for(var i=0;i<3;i++){
//     array[i]=[9, 7, 4]
// }

// for(var i=0;i<3;i++){
//     for(var j=0;j<3;j++){
//         array[i][j]=Math.random( );
//     }
// }
// array[0][0]=-1;
// console.log(array);

var array = new Array(9);
for(var i=0;i<9;i++){
    array[i] = "R";
}


var count=0
var exit=0
function myfunc(Element_id){

    // $('#reset1').fadeIn();
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
     
        addToArray(Element_id)
     
    
}
var x=0
var flag=0
function addToArray(Element_id){
    array[Element_id] = document.getElementById(Element_id).innerHTML;
    // console.log(document.getElementById("1").innerHTML)
    // array[0][0] = document.getElementById("1").innerHTML;
    // array[0][1] = document.getElementById("2").innerHTML;
    // array[0][2] = document.getElementById("3").innerHTML;
    // array[1][0] = document.getElementById("4").innerHTML;
    // array[1][1] = document.getElementById("5").innerHTML;
   
    // array[1][2] = document.getElementById("6").innerHTML;
    // array[2][0] = document.getElementById("7").innerHTML;
    // array[2][1] = document.getElementById("8").innerHTML;
    // array[2][2] = document.getElementById("9").innerHTML;
    
           checkWinner();
    
}
function checkWinner(){
    
        // if(array[0][0]==array[0][1] && array[0][1]==array[0][2] ){
        //     window.alert(array[0][0] + " is the winner");
        //     location.reload();
        // }
        // else if(array[1][0]==array[1][1] && array[1][1]==array[1][2] ){
        //     window.alert(array[1][0] + " is the winner");
        //     location.reload();
        // }
        // else if(array[2][0]==array[2][1] && array[2][1]==array[2][2]){
        //     window.alert(array[2][0] + " is the winner");
        //     location.reload();
        // }
        // else if(array[0][0]==array[1][0] && array[1][0]==array[2][0] ){
        //     window.alert(array[0][0] + " is the winner");
        //     location.reload();
        // }
        // else if(array[0][1]==array[1][1] && array[1][1]==array[2][1]){
        //     window.alert(array[0][1] + " is the winner");
        //     location.reload();
        // }
        // else if(array[0][2]==array[1][2] && array[1][2]==array[2][2]){
        //     window.alert(array[0][2] + " is the winner");
        //     location.reload();
        // }
        // else if(array[0][0]==array[1][1] && array[1][1]==array[2][2] ){
        //     window.alert(array[0][0] + " is the winner");
        //     location.reload();
        // }
        // else if(array[0][2]==array[1][1] && array[1][1]==array[2][0] ){
        //     window.alert(array[0][2] + " is the winner");
        //     location.reload();
        // }
        // flag++;
        // // if((array[0][0]=="X" || array[0][0]=="O")){
        // //     window.alert("Match Draw");
        // // }
        // if(flag==9){
        //     window.alert("Match Draw");
        //     location.reload();
        // }
    
        if(array[0]==array[1] && array[1]==array[2] && (array[0]=="X" || array[0]=="O" || array[1]=="X" || array[1]=="O" || array[2]=="X" || array[2]=="O")  ){
                 window.alert(array[0] + " is the winner");
                 location.reload();
        }
    

        else if(array[3]==array[4] && array[4]==array[5] && (array[3]=="X" || array[3]=="O" || array[4]=="X" || array[4]=="O" || array[5]=="X" || array[5]=="O") ){
            window.alert(array[3] + " is the winner");
            location.reload();
        }

        else if(array[6]==array[7] && array[7]==array[8] && (array[6]=="X" || array[6]=="O" || array[7]=="X" || array[7]=="O" || array[8]=="X" || array[8]=="O") ){
            window.alert(array[6] + " is the winner");
            location.reload();
        }

        else if(array[0]==array[3] && array[3]==array[6] && (array[1]=="X" || array[1]=="O" || array[3]=="X" || array[3]=="O" || array[6]=="X" || array[6]=="O") ){
            window.alert(array[0] + " is the winner");
            location.reload();
        }

        else if(array[1]==array[4] && array[4]==array[7] && (array[1]=="X" || array[1]=="O" || array[4]=="X" || array[4]=="O" || array[7]=="X" || array[7]=="O") ){
            window.alert(array[1] + " is the winner");
            location.reload();
        }

        else if(array[2]==array[5] && array[5]==array[8] && (array[2]=="X" || array[2]=="O" || array[5]=="X" || array[5]=="O" || array[8]=="X" || array[8]=="O")){
            window.alert(array[2] + " is the winner");
            location.reload();
        }

        else if(array[0]==array[4] && array[4]==array[8] && (array[0]=="X" || array[0]=="O" || array[4]=="X" || array[4]=="O" || array[8]=="X" || array[8]=="O") ){
            window.alert(array[0] + " is the winner");
            location.reload();
        }

        else if(array[2]==array[4] && array[4]==array[6] && (array[2]=="X" || array[2]=="O" || array[4]=="X" || array[4]=="O" || array[6]=="X" || array[6]=="O") ){
            window.alert(array[2] + " is the winner");
            location.reload();
        }
    

        
}


  

