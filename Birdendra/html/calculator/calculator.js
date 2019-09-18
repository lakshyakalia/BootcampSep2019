class Calculator{

    val 

    constructor(){
        this.val ='';
    }
    addData( val ){
        this.val += val ;
    }
    compute(){
        
    }
    // this fns will delete last entered character
    deleteVal( str ){
        var sub = str.substring(0,str.length-1);
        return sub;
    }
}
// class Main{
    
    c = new Calculator();

    function input(id){
        value = document.getElementById(id).innerHTML;
        if ( value === 'DEL' && c.val != ''){
            c.val = c.deleteVal(c.val);
        }
        else if ( value != 'DEL' ){
        c.addData(value);
        }
        document.getElementById("res").innerHTML = c.val;
    }
// }