class Calculator {

	inputStr;
	ans;
	constructor() {
		this.inputStr = '';
		this.ans = '';
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
	static isOperator(op) {
		return op == '/' || op == '*' || op == '+' || op == '-';
	}
	//this fns is to calculate exponent value like 2^2 = 4
	//this will form string with Maht.pow(2,2) to give to eval() fns
	//e.g '1+2^3*5' will convert into '1+Math.pow(2,3)*5'
	powerFns(s) {
        // console.log(s);
		var stk1 = [];
        var stk2 = [];
        stk1.push(s.charAt(0));
		for (var i = 1; i < s.length; i++) {

			if (s.charAt(i) == '^') {

				var val = stk1.pop();
				var sum = 0;
                var c = 1;
                //check for more tham 1 digit number
				while (stk1.length > 0) {
					if (Calculator.isOperator(val)) {
						stk1.push(val);
						break;
					}
					else if ( val == '.'){
						var v1 = '0.'+sum;
					console.log(v1)
					sum = parseFloat(v1);
					c/=10;
					}else{
					var v = parseFloat(val)
					sum += + c* v;
					 c *= 10 ;
					}
                    val = stk1.pop();
                    if ( stk1.length == 0 ){
                        v = parseFloat(val);
                        sum += v*c;
                        break;
                    }
				}
				// console.log(sum);
				var pow = 'Math.pow(' + sum + ',' + s.charAt(i + 1) + ')';

				stk1.push(pow);
				i++;

			} else {
				stk1.push();
				stk1.push(s.charAt(i));
			}
		}
		while (stk1.length > 0) {
			stk2.push(stk1.pop());
		}
		var input = '';
		while (stk2.length > 0) {
			input += stk2.pop();
        }
        // console.log(input);
		return input;
	}
}
c = new Calculator();

function input(id) {
	clickV = document.getElementById(id).innerHTML;
	if (clickV === '=') {
		if (c.inputStr.indexOf('^') > -1)
			c.inputStr = c.powerFns(c.inputStr);

		c.ans = eval(c.inputStr);
		document.getElementById("res").innerHTML = c.ans;
		c.inputStr = '';

	} else if (clickV === 'DEL') {
		if (c.inputStr == '') {
			c.ans = c.deleteVal(c.ans);
			document.getElementById("res").innerHTML = c.ans;
		} else {
			c.inputStr = c.deleteVal(c.inputStr);
			document.getElementById("res").innerHTML = c.inputStr;
		}
	} else if (clickV == 'ANS') {
		c.addData(c.ans);
        document.getElementById("res").innerHTML = c.inputStr;
        
	} else if ( clickV == 'AC'){
		c.inputStr = c.ans = '';
		document.getElementById("res").innerHTML = c.inputStr;
	} 
	else {
		c.addData(clickV);
		document.getElementById("res").innerHTML = c.inputStr;

	}

}