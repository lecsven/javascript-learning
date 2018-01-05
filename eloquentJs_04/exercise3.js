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
  
	return list;//不要遗漏
}

function listToArray(list){
	var array = [];
	/*for(var i=list.length-1;i>=0;i--){
		array.push()
	    }
		*/
		for (var node =list ; node; node =node.rest){//这一句很巧妙，node直到为null一直执行
			array.push(node.value);
		}
		return array;
	}
  
function prepend(num,list){
	/*var newlist = null;
	value:num,
	rest:list
*/
	return {value:num,rest:list}//学习下，可以直接return list
	
}

function nth(list,n){
	if(!list)//注意意思
		return undefined;
	//else if(n=0)
	else if(n==0)
	
		return list.value;
	else 
		return nth(list.rest,n-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20