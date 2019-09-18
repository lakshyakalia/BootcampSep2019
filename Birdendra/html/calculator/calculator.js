class Calculator {

    inputStr
    value = []; //stack to hold numeric value
    ops = []; //stack to hold operator

    // constructor for class Calculator
    constructor() {
        this.inputStr = '';
    }
    // this will add input to inputStr
    addData(inputStr) {
        this.inputStr += inputStr;
    }
    // this fns will delete last entered character
    deleteVal(str) {
        var sub = str.substring(0, str.length - 1);
        return sub;
    }
    // this will check precedence of operator
    precedence(op) {
        switch (op) {
            case '*':
            case '/':
                return 2;
            case '+':
            case '-':
                return 1;
        }
    }
    // this will calculate the value
    compute(v1, v2, op) {
        switch (op) {
            case '*':
                return v1 * v2;
            case '/':
                return v1 / v2;
            case '+':
                return v1 + v2;
            case '-':
                return v1 - v2;
        }
    }
    // this will check for digit
    isDigit(ch) {

        if (parseFloat(ch) >= 0 && parseFloat(ch) <= 9) {
            return true;
        } else {
            return false;
        }
    }
    // this is main function to perform calculation base on user input
    calc(str, obj) {
        // console.log(str);
        // this will check for invalid input
        //if found invalid it will return without proceeding further
        if (obj.isDigit(str.charAt(0)) && obj.isDigit(str.charAt(str.length - 1)))
            return 'INVALID INPUT';
        // transverse full input string and push to stacks 
        for (var i = 0; i < str.length; i++) {

            if (obj.isDigit(str.charAt(i))) {

                var val = 0;
                // There may be more than one 
                // digits in number. 
                while (i < str.length && obj.isDigit(str.charAt(i))) {
                    // console.log(i);
                    val = (val * 10) + parseFloat(str.charAt(i));
                    i++;

                }
                i--;
                //push val to value stack
                obj.value.push(val);

            } else {

                if (obj.ops.length > 0) {
                    //this is done since there is no peek function for stack in js
                    var top = obj.ops.pop();
                    obj.ops.push(top);
                    //check for precendence 
                    while (obj.ops.length > 0 && obj.precedence(top) >= obj.precedence(str.charAt(i))) {
                        //pop top values from stack
                        var v2 = parseFloat(obj.value.pop());
                        var v1 = parseFloat(obj.value.pop());
                        // console.log(v2 +' '+v1);
                        var op = obj.ops.pop();
                        //calculate value and push to value stack
                        obj.value.push(obj.compute(v1, v2, op));
                        v1 = '';
                        v2 = '';
                        op = '';

                    }
                }
                //push operator in ops stack
                obj.ops.push(str.charAt(i));
                // console.log(ops.pop());
            }
        }
        //check ops stack is empty or not 
        //make it empty and push calculate value to value stack
        while (obj.ops.length > 0) {
            var v2 = parseFloat(obj.value.pop());
            var v1 = parseFloat(obj.value.pop());
            var op = obj.ops.pop();
            obj.value.push(obj.compute(v1, v2, op));
            v1 = '';
            v2 = '';
            op = '';
        }
        //last value in value stack is answer
        return obj.value.pop();
    }
}

c = new Calculator();

function input(id) {
    clickV = document.getElementById(id).innerHTML;
    // console.log(clickV);
    if (clickV === '=') {
        // console.log('=');
        ans = c.calc(c.inputStr, c);
        console.log(ans);
        document.getElementById("res").innerHTML = ans;
        c.inputStr = '';
        console.log(c.value.length + ' ' + c.ops.length);
    } else if (clickV === 'DEL' && c.inputStr != '') {
        c.inputStr = c.deleteVal(c.inputStr);
        document.getElementById("res").innerHTML = c.inputStr;
        // c.inputStr = '';
    } else if (clickV != 'DEL') {
        c.addData(clickV);
        document.getElementById("res").innerHTML = c.inputStr;
        // c.inputStr = '';
    }

}