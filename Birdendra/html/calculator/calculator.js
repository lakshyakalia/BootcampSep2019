class Calculator {

	inputStr
	value = [];
	ops = [];
	constructor() {
		this.inputStr = '';
	}
	addData(inputStr) {
		this.inputStr += inputStr;
	}
	// this fns will delete last entered character
	deleteVal(str) {
		var sub = str.substring(0, str.length - 1);
		return sub;
	}
	precedence(op) {
		switch (op) {
			case '*' :
			case '/' : return 2;
			case '+' :
			case '-': return 1; 
		}
	}
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
	isDigit(ch) {

		if (parseFloat(ch) >= 0 && parseFloat(ch) <= 9) {
			return true;
		} else {
			return false;
		}
	}
	calc(str, obj) {
        console.log(str);

		for (var i = 0; i < str.length; i++) {

			if (obj.isDigit(str.charAt(i))) {

				// console.log(i);
				var val = 0;
				while (i < str.length && obj.isDigit(str.charAt(i))) {
					// console.log(i);
					val = (val * 10) + parseFloat(str.charAt(i));
					i++;

				}
				i--;
				obj.value.push(val);

			} else {

				if (obj.ops.length > 0) {
					var top = obj.ops.pop();
					obj.ops.push(top);
					while (obj.ops.length > 0 && obj.precedence(top) >= obj.precedence(str.charAt(i))) {

						var v2 = parseFloat(obj.value.pop());
						var v1 = parseFloat(obj.value.pop());
						// console.log(v2 +' '+v1);
						var op = obj.ops.pop();

                        obj.value.push(obj.compute(v1, v2, op));
                        v1 ='';v2='';op='';

					}
				}
				obj.ops.push(str.charAt(i));
				// console.log(ops.pop());
			}
		}

		while (obj.ops.length > 0) {
			var v2 = parseFloat(obj.value.pop());
			var v1 = parseFloat(obj.value.pop());
			var op = obj.ops.pop();
            obj.value.push(obj.compute(v1, v2, op));
            v1 ='';v2='';op='';
		}
		return obj.value.pop();
	}
}
// class Main{

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
        console.log(c.value.length +' '+c.ops.length);
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
// }