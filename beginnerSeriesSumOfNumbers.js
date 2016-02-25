// Given two integers, which can be positive and negative, find the sum of all the numbers between 
// including them too and return it. If both numbers are equal return a or b.
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1

function GetSum(a,b){
 
  var newArray = [];
  
  if (a < b) {
    for(var i = a; i < b+1; i++){
      newArray.push(i);
    }
  } else {
    for(var i = b; i < a+1; i++){
      newArray.push(i);
    }
  }
  return newArray.reduce(function(x,y){
    return x+y
  })
}
