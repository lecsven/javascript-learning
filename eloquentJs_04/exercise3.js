// Your code here.
//function arrayToList(a,b,c){
/*var arrayToList(a,b,c) = {
	value: a,
	rest:{
		value:b,
		rest:{
			value:c,
			rest:null
		}
	}
};
*/
function arrayToList(Arrays){
	var list = null;
	for(var i=Arrays.length-1;i>=0;i--){
		list = {
			value:Arrays[i],
			rest : list
	    }
	}
  // Your code here.
//function arrayToList(a,b,c){
/*var arrayToList(a,b,c) = {
	value: a,
	rest:{
		value:b,
		rest:{
			value:c,
			rest:null
		}
	}
};
*/
function arrayToList(Arrays){
	list = null;
	for(i=Arrays.length-1;i>=0;i--){
		list = {
			value:Arrays[i],
			rest : list
	    }
	}
	return list;//不要遗漏
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20