function range(start,end,step){
  var string=[];
  console.log(arguments.length);
  if (arguments.length == 2)
    step == 1;
  if (start < end){
    for(count=start;count<=end;count+=step){
      string.push(count);
    }
  }
  else if (start >end){
     for(count=start;count>=end;count+=step){
      string.push(count);
    
  }
  
}
  return string
}
console.log(range(2, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 20,2));
console.log(range(50, 20, -3));
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 20));
