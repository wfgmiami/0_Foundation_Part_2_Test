function factorialIterative(num){
	var result = 1;

	for (var i = 1; i <= num; i++){
		result *= i;
	}
	return result;
}

function factorial(num){
	
	if (num == 0)
		return 1;
	else
		return num * factorial(num - 1)
}

function fib(num){
	if (num == 0 || num == 1){
		return 1;
	}else{
		return fib(num - 1) + fib(num - 2);
	}

}

function type(test){

	var result = toString.call(test);
	var len = result.length;

	return result.slice(8, len - 1);
}

function stringify(inp){
	if (type(inp) != "Array" && type(inp) != "Object"){
		if (type(inp) == "String")
			return '"' + inp + '"';
		else
			return String(inp);

	}else if(type(inp) == "Array"){
		return "[" + inp.map(function(elem){
			return stringify(elem);
		}).join(",") + "]";

	}else if(type(inp) == "Object"){
		var arr = Object.keys(inp);

		return "{" + arr.map(function(elem){
			if (type(inp[elem]) == "Object" || type(inp[elem]) == "Array")
				return stringify(elem) + ": " + stringify(inp[elem]);
			else	
				if (type(inp[elem]) == "String")
					var val = '"' + inp[elem] + '"';
				else
					var val = inp[elem];
				return stringify(elem) + ": " + val;

		}).join(",") + "}";
	}
} 

