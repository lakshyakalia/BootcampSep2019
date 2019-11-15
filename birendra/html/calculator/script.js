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
				var d_p = 1;
				var flg = 0;
				//check for more tham 1 digit number
				while (stk1.length > 0) {
					flg = 1;
					if (Calculator.isOperator(val)) {
						stk1.push(val);
						break;
					} //handle decimal point value
					else if (val == '.') {
						var v1 = '0.' + sum;
						console.log(v1)
						sum = parseFloat(v1);
						d_p /= 10;
					} else {
						var v2 = parseFloat(val)
						// console.log('v2'+v2);
						sum += +d_p * v2;
						d_p *= 10;
					}
					val = stk1.pop();
					if (stk1.length == 0) {
						var v = parseFloat(val);
						sum += v * d_p;
						break;
					}
				}
				// console.log(sum);
				if (flg == 1)
					var pow = 'Math.pow(' + sum + ',' + s.charAt(i + 1) + ')';
				else
					var pow = 'Math.pow(' + val + ',' + s.charAt(i + 1) + ')';
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
//main function to invoke from html page
function input(id) {
	clickV = document.getElementById(id).innerHTML;
	switch (clickV) {
		case '=':
			if (c.inputStr.indexOf('^') > -1) {
				c.inputStr = c.powerFns(c.inputStr);
			}
			inv = c.inputStr.charAt(0);
			if (inv == '*' || inv == '/' || inv == '^')
				c.ans = 'INVALID INPUT';
			else
				c.ans = eval(c.inputStr);
			document.getElementById("res").innerHTML = c.ans;
			c.inputStr = '';
			break;
		case 'DEL':
			if (c.inputStr == '') {
				c.ans = c.deleteVal(c.ans);
				document.getElementById("res").innerHTML = c.ans;
			} else {
				c.inputStr = c.deleteVal(c.inputStr);
				document.getElementById("res").innerHTML = c.inputStr;
			}
			break;
		case 'ANS':
			c.addData(c.ans);
			document.getElementById("res").innerHTML = c.inputStr;
			break;
		case 'AC':
			c.inputStr = c.ans = '';
			document.getElementById("res").innerHTML = c.inputStr;
			break;
		default:
			c.addData(clickV);
			document.getElementById("res").innerHTML = c.inputStr;
	}
}