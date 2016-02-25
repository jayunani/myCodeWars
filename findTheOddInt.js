// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(num) {
 	var myObj = {};
  	
  	for(var i=0; i<num.length; i++){
    	if(myObj[num[i]] === undefined){
      		myObj[num[i]] = 1;  
    	} else {
      		myObj[num[i]] += 1;
    	}
  	}
  	
  	for(var key in myObj) {
    	if(myObj[key] % 2 !== 0){
      		return parseInt(key);
      	}
    }
}