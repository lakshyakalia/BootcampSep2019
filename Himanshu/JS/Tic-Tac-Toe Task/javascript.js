var gameValue = "";
var buttonCount = 0;
function valueStatus(a,b,ori){
    let a_value, b_value, ori_value;
    a_value = document.getElementById(String(a)).value;
    b_value = document.getElementById(String(b)).value;
    ori_value = document.getElementById(String(ori)).value;
    if(a_value == ori_value && b_value == ori_value){
        return true;
    }
    return false;
}

function checkStraightWin(direction,num){
    let a,b;
    if(direction == 'right'){
        a = num + 1;
        b = a + 1;  
    }
    else{
        a = num - 1;
        b = a - 1;
    }
    return valueStatus(a,b,num);
}

function checkDownwardWin(direction,num){
    let a,b;
    if(direction == 'down'){
        a = num + 3;
        b = a + 3;
    }
    else{
        a = num - 3;
        b = a - 3;
    }
    return valueStatus(a,b,num);
}

function checkDiagonalWin(num){
    let a,b;
    if(num == 1){
        a = num + 4;
        b = a + 4;
    }
    else if(num == 3){
        a = num + 2;
        b = a + 2;
    }
    else if(num == 7){
        a = num - 2;
        b = a - 2;
    }
    else{
        a = num - 4;
        b = a - 4;
    }
    return valueStatus(a,b,num);
}

function getGameValue(id){
    let gameColor;
    buttonCount += 1;
    value = document.getElementById(id).value;
    if(gameValue == ""){
        gameValue = 'X'
    }
    else if(gameValue == "X" && value== "C"){
        gameValue = "O";
    }
    else if(gameValue == "O" && value == "C"){
        gameValue = "X";
    }
    document.getElementById(id).value = gameValue;
    document.getElementById(id).style.bgcolor = gameColor;
    document.getElementById(id).disabled = true;
    let status = Boolean(checkGameWin(id));
    if(status == true){
        document.getElementById('winner_result').innerHTML = "You Won the game";
    }
    else if(status == false && buttonCount == 9){
        document.getElementById('winner_result').innerHTML = "Game got tied";
    }
}

function checkGameWin(num){
    num = parseInt(num);
    str_status = down_status = diag_status = false;
    switch(num){
        case 1:
            str_status = checkStraightWin('right',1);
            down_status  = checkDownwardWin('down',1);
            diag_status = checkDiagonalWin(1);
            break;
        case 2:
            str_status = checkDownwardWin('down',2);
            break;
        case 3:
            str_status = checkStraightWin('left',3);
            down_status = checkDownwardWin('down',3);
            diag_status = checkDiagonalWin(1);
            break;
        case 4:
            str_status = checkStraightWin('right',4);
            break;
        case 6:
            str_status = checkStraightWin('left',6);
            break;
        case 7:
            str_status = checkStraightWin('right',7);
            down_status = checkDownwardWin('up',7);
            diag_status = checkDiagonalWin(7);
            break;
        case 8:
            down_status = checkDownwardWin('up',8);
            break;
        case 9:
            str_status = checkStraightWin('left',9);
            down_status = checkDownwardWin('up',9);
            diag_status = checkDiagonalWin(9);
            break;   
    }
    if(str_status == true || down_status == true || diag_status == true){
        return true;
    }
    return false;
}
