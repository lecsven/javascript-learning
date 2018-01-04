function reverseArray(Array){
	newArray=[];
	for(i=Array.length-1;i>=0;i--){
		//newArray += Array[i];//错误
      newArray.push( Array[i]);//使用push方法
      
	}
	return newArray;

}
function reverseArrayInPlace(Array){
	newArray=[];
	for(i=Array.length-1;i>=Array.length/2;i--){
		tempArray=Array[i];
        Array[i]=Array[Array.length-1-i];
        Array[Array.length-1-i]=tempArray;
	}
	return newArray;

}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
//var arrayValue = [1, 2, 3, 4, 5,7,8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]