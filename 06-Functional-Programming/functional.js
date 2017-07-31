function doubler(num){
	return num * 2;
}

function map(arr, action){
	var result = [];

	for (var i = 0; i < arr.length; i++){
		result.push(action(arr[i]));
	}
	return result;
}

function filter(arr, action){
	var result = [];
	for (var i = 0; i < arr.length; i++){
		if(action(arr[i]))
			result.push(arr[i]);
	}
	return result;
}

function contains(arr, val){
	if(Array.isArray(arr)){
		for(var i = 0; i < arr.length; i++){
			if (arr[i] === val)
				return true;
			
		}
	}else{
		for (var key in arr){
			if (arr[key] === val)
				return true;
		}
	}
	return false;
}

function countWords(str){
	var arr = str.split(" ");
	return arr.length;
}

function reduce(arr, init, action){
	var result = [];

	if (arr.length == 0 && typeof init !== "undefined"){
		result.push(arguments[1](true));
	}else if(arr.length == 0 && typeof init === "undefined"){
		result.push(false);
	}

	if (arguments.length == 3){
		for (var i = 0; i < arr.length; i++){
			init += action(arr[i], 0);
		}
		return init;
	}else{
		for (var i = 0; i < arr.length; i++){
			result.push(arguments[1](arr[i]));
		}
		return result
	}
}

function countWordsInReduce(elem){
	return countWords(elem);
}

function sum(arr){
	return reduce(arr, 0, function(a, b){return a + b})
}

function every(arr, action){
	var result = reduce(arr, action);

	for (var i = 0; i < result.length; i++){
		if (!result[i])
			return false;
	}
	return true;
	
}

function any(arr, action){
	var result = reduce(arr, action);

	for (var i = 0; i < result.length; i++){
		if (result[i])
			return true;
	}
	return false;
	
}