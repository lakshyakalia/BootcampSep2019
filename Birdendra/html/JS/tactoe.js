
var opt = '';
var times = 0;
var flg = false;
function clicking(id){
    times++;
    var input = document.getElementById(id).innerHTML ;
    if ( flg == true ){
        alert("game is over click reset to play again ");
    }
    else if ( (opt === '' || opt === 'X') && ( input === 'click') ){
        opt = 'O';
    document.getElementById(id).style.background = "#0080ff";
    document.getElementById(id).innerHTML = 'X';
    document.getElementById(id).style.color ='#ffffff';
    document.getElementById('display').innerHTML = opt + ' Turn';
    if ( times >= 5 )
    checkWinner( id );
    }
    else if( ( opt ==='' || opt === 'O') && ( input === 'click')) {
        opt = 'X';
    document.getElementById(id).style.background = "#00ff40";
    document.getElementById(id).innerHTML = 'O';
    document.getElementById(id).style.color ='#ffffff';
    document.getElementById('display').innerHTML = opt + ' Turn';
    if ( times >= 5 )
    checkWinner(id);
    }
    
}
function checkWinner(id){
    console.log(times + ' '+ id );
    var b1= document.getElementById('b1').innerHTML;
    var b2 = document.getElementById('b2').innerHTML;
    var b3 = document.getElementById('b3').innerHTML;
    var b4 = document.getElementById('b4').innerHTML;
    var b5 = document.getElementById('b5').innerHTML;
    var b6 = document.getElementById('b6').innerHTML;
    var b7 = document.getElementById('b7').innerHTML;
    var b8 = document.getElementById('b8').innerHTML;
    var b9 = document.getElementById('b9').innerHTML;
    console.log(b1+' '+b2+' '+b3);
    switch( id ){
        case 'b1':{
            if ( b1 === b2 && b1 === b3 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b1 === b4 && b1 === b7){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if (b1 === b5 && b1 === b9 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b2':{
            if ( b2 === b1 && b2 === b3 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b2 === b5 && b2 === b8 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b3':{
            if ( b3 === b2 && b3 === b1 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b3 === b5 && b3 === b7){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if (b3 === b6 && b3 === b9 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;            
            }
            break;
        }
        case 'b4':{
            if ( b4 === b1 && b4 === b7 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b4 === b5 && b4 === b6){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b5':{
            if ( b5 === b1 && b5 === b9 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b5 === b2 && b5 === b8){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;            
            }
            else if (b5 === b3 && b5 === b7 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if (b5=== b4 && b5 === b6 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b6':{
            if ( b6 === b3 && b6 === b9 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b6 === b5 && b6 === b4){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b7':{
            if ( b7 === b4 && b7 === b1 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b7 === b8 && b7 === b9){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if (b7 === b5 && b7 === b3 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b8':{
            if ( b8 === b7 && b8 === b9 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b8 === b5 && b8 === b2){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
        case 'b9':{
            if ( b9 === b7 && b9 === b8 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if ( b9 === b6 && b9 === b3){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            else if (b9 === b5 && b9 === b1 ){
            document.getElementById('display').innerHTML = document.getElementById(id).innerHTML + ' won the game';
            flg = true;
            }
            break;
        }
    }
    
}
function reSet(){

    var tdArr = document.getElementsByTagName("TD");
    console.log(tdArr.length);
    var thd = document.getElementById("display");
    thd.style.backgroundColor='#ffcccc';
    thd.innerHTML = 'welcome to tic tac toe';
    for ( var i = 0 ; i < tdArr.length ; i++ ){
            tdArr[i].innerHTML = 'click';
            tdArr[i].style.backgroundColor ="grey";
    }
}