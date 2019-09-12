var gameValue = "";
var buttonCount = 0;

let canvas = [
    {
      123:{ x1:0, y1:25, x2:300, y2:25 },
      456:{ x1:0, y1:75, x2:300, y2:75 },
      789:{ x1:0, y1:125, x2:300, y2:125 },
      147:{ x1:50, y1:0, x2:50, y2:300 },
      258:{ x1:150, y1:0, x2:150, y2:300 },
      369:{ x1:0, y1:0, x2:600, y2:300 },
      159:{ x1:0, y1:0, x2:600, y2:300 }
    }
]

function getCanvasCoordinates(a,b,ori){
    let str = String(a)+String(b)+String(ori)
    str = str.split("").sort().join("")
    for(var i in canvas){
        for(var keys in canvas[i]){
            if(keys == str){
                return canvas[i][keys];
            }
        }
    }
}

function valueStatus(a,b,ori){
    let a_value, b_value, ori_value,str;
    a_value = document.getElementById(String(a)).value;
    b_value = document.getElementById(String(b)).value;
    ori_value = document.getElementById(String(ori)).value;
    if(a_value == ori_value && b_value == ori_value){
        str = getCanvasCoordinates(a,b,ori);
        getCanvasLine(str);
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
    document.getElementById(id).disabled = true;
    let status = Boolean(checkGameWin(id));
    if(status == true){
        $("#winner_result").animate({left:'450px'}).html(gameValue+" won the game");
        var ele = document.getElementsByClassName("disable");
        for(let i=0;i<ele.length;i++){
            ele[i].disabled = true;
        }
        $("#reset").animate({top:'430px'}).css({"display":"block"});
        document.getElementById('reset').style.display="block";
    }
    else if(status == false && buttonCount == 9){
        document.getElementById('winner_result').innerHTML = "Game got tied";
        document.getElementById('reset').style.display="block";
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
            str_status = checkStraightWin('right',2);
            down_status = checkDownwardWin('down',2);
            break;
        case 3:
            str_status = checkStraightWin('left',3);
            down_status = checkDownwardWin('down',3);
            diag_status = checkDiagonalWin(3);
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

function getCanvasLine(obj){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(obj['x1'],obj['y1']);
    ctx.lineTo(obj['x2'],obj['y2']);
    ctx.stroke();
}

function resetGame(){
    location.reload();
}